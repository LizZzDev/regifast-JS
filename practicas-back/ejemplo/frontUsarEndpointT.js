import {
    createSelector,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import * as api from '../../api/assessment';
import { TYPE_SUB_ASSESSMENT } from '../../components/CardList/CardTypes';
import { arraymove } from '../../utils';
import { addAssessmentCategory } from '../../api';
const initialState = {
    values: {
        name: '',
        description: '',
        contractPhase: '0',
        id: null,
        version: null,
        subAssessments: [],
        reviewType: null,
        categories: [],
    },
    meta: {
        currentIndex: 0,
        lastIndex: 2,
        touched: [],
        invalid: true,
    },
};

export const addAssessment = createAsyncThunk(
    'assessment/addAssessment',
    async (params, thunkAPI) => {
        const assessment = thunkAPI.getState().assessment.values;
        const response = await api.addAssessment(assessment, params, thunkAPI);
        return response;
    }
);

export const getAssessmentById = createAsyncThunk(
    'assessment/getAssessmentById',
    async (params, thunkAPI) => {
        const response = await api.getAssessmentById(params, thunkAPI);
        return response;
    }
);

export const getById = createAsyncThunk(
    'assessment/getById',
    async (params, thunkAPI) => {
        const response = await api.getById(params, thunkAPI);
        return response;
    }
);

export const updateAssessment = createAsyncThunk(
    'assessment/updateAssessment',
    async (params, thunkAPI) => {
        const assessment = thunkAPI.getState().assessment.values;
        const response = await api.updateAssessment(
            {
                id: assessment.id,
                version: assessment.version,
                isDraft: params.isDraft,
                assessment,
            },
            thunkAPI
        );
        return response;
    }
);

export const updateCategoriesById = createAsyncThunk(
    'assessment/updateCategoriesById',
    async (params, thunkApi) => {
     const response = await api.updateCategoriesById(
            {
                id: params.id,
                version: params.version,
                categoryIds: params.categoryIds,
            },
            thunkApi
        );

        return response;
    }
);

export const updateMultiplesCategoriesById = createAsyncThunk(
    'assessment/updateMultiplesCategoriesById',
    async (params, thunkApi) => {
     const response = await api.updateMultiplesCategoriesById(
            {
                assessments: params.assessments,
                categoryIds: params.categoryIds,
            },
            thunkApi
        );

        return response;
    }
);

export const deleteMultiplesCategoriesById = createAsyncThunk(
    'assessment/deleteMultiplesCategoriesById',
    async (params, thunkApi) => {
     const response = await api.deleteMultiplesCategoriesById(
            {
                assessments: params.assessments,
                categoryIds: params.categoryIds,
            },
            thunkApi
        );

        return response;
    }
);

export const createAssessmentCategory = createAsyncThunk(
    'assessment/createCategory',
    async ({ categoryName, categoryDecription }, thunkApi) => {
        const response = await addAssessmentCategory(
            {
                categoryName,
                ...(categoryDecription && { categoryDecription }),
            },
            thunkApi
        );
        return response;
    }
);

export const getAssessmentExportLogs = createAsyncThunk(
    'assessment/getAssessmentExportLogs',
    async (params, thunkAPI) => {
        const response = await api.getAssessmentExportLogs(params, thunkAPI);
        return response;
    }
);

export const getXLSAssessmentExport = createAsyncThunk(
    'assessment/getXLSAssessmentExport',
    async (params, thunkAPI) => {
        const response = await api.getXLSAssessmentExport(params, thunkAPI);
        return response;
    }
);

export const getXlsSubAssessmentExport = createAsyncThunk(
    'assessment/getXlsSubAssessmentExport',
    async (params, thunkAPI) => {
        const response = await api.getXlsSubAssessmentExport(params, thunkAPI);
        return response;
    }
);

export const updateAssessmentIppfVersion = createAsyncThunk(
    'assessment/updateAssessmentIppfVersion',
    async (params, thunkAPI) => {
        const { assessment, ippfVersionNew } = params;
        const response = await api.updateAssessmentIppfVersion(
            {
                id: assessment._id,
                version: assessment._version,
                ippfVersion: ippfVersionNew,
            },
            thunkAPI
        );
        return response;
    }
);
const setLoading = (value) => (state) => {
    state.meta.loading = value;
};

const searchQuestion = (q, val) => {
    const qFiltered = val?.subAssessmentQuestionMaps.find(
        (e) => q._id === e.questionId
    );
    return qFiltered?.hideQuestion ?? false;
};

const validExceptions = (val) => {
    return {
        ...val,
        sections: val.sections.map((sec) => ({
            ...sec,
            questions: sec.questions.map((q) => {
                return { ...q, hidden: searchQuestion(q, val) };
            }),
        })),
    };
};

export const slice = createSlice({
    name: 'assessment',
    initialState,
    reducers: {
        init: () => {
            const newState = JSON.parse(JSON.stringify(initialState));
            return newState;
        },
        next: (state) => {
            const { currentIndex, lastIndex } = state.meta;
            if (currentIndex < lastIndex) {
                state.meta.currentIndex += 1;
            }
        },
        addCategory: (state, action) => {
            state.values.categories = [
                ...state.values.categories,
                action.payload,
            ];
        },

        removeCategory: (state, action) => {
            state.values.categories = state.values.categories.filter(
                ({ id }) => id !== action.payload
            );
        },
        previous: (state) => {
            const { currentIndex } = state.meta;
            if (currentIndex > 0) {
                state.meta.currentIndex -= 1;
            }
        },
        updateValues: (state, action) => {
            state.values = {
                ...state.values,
                ...action.payload,
            };
        },
        addSubAssessments: (state, action) => {
            const subAssessmentsResult = [];
            const subAssessments = (action.payload.subAssessments || []).map(
                (val) =>
                    state.values.subAssessments.find(
                        (subAssessment) => subAssessment.id === val.id
                    ) || validExceptions(val)
            );
            let highestOrder = 0;
            for (let i = 0; i < subAssessments.length; ++i) {
                let order = subAssessments[i].order || 0;
                highestOrder = highestOrder < order ? order : highestOrder;
                subAssessmentsResult.push({
                    ...subAssessments[i],
                    typeElement: TYPE_SUB_ASSESSMENT,
                    order,
                });
            }
            state.values = {
                ...state.values,
                ...action.payload,
                subAssessments: subAssessmentsResult
                    .map((val) => {
                        if (!val.order) {
                            highestOrder += 1;
                            val.order = highestOrder;
                        }
                        return val;
                    })
                    .sort((a, b) => a.order - b.order),
            };
        },

        updateMeta: (state, action) => {
            const { meta } = state;
            state.meta = { ...meta, ...action.payload };
        },
        removeSubAssessment: (state, action) => {
            const removedSubAssessment = state.values.subAssessments.find(
                (val) => val.id === action.payload
            );
            state.values.subAssessments = state.values.subAssessments
                .filter((v) => v.id !== action.payload)
                .map((val) => {
                    if (removedSubAssessment.order < val.order) {
                        val.order = val.order - 1;
                    }
                    return val;
                });
        },
        moveSubAssessmentOrder: (state, action) => {
            const { movingElementId, chosenValue, isBefore } = action.payload;

            const movingSubAssessmentIndex = state.values.subAssessments.findIndex(
                (val) => val.id === movingElementId
            );
            const chosenSubAssessmentIndex = state.values.subAssessments.findIndex(
                (val) => val.id === chosenValue
            );

            if (
                (isBefore &&
                    chosenSubAssessmentIndex - 1 !==
                        movingSubAssessmentIndex) ||
                (!isBefore &&
                    chosenSubAssessmentIndex + 1 !== movingSubAssessmentIndex)
            ) {
                const cards = state.values.subAssessments;

                arraymove(
                    cards,
                    movingSubAssessmentIndex,
                    chosenSubAssessmentIndex
                );

                state.values.subAssessments = cards
                    .map((c, index) => ({ ...c, order: index + 1 }))
                    .sort((a, b) => a.order - b.order);
            }
        },

        modifySubAssessment: (state, action) => {
            state.values.subAssessments = state.values.subAssessments.map(
                (subAssessment) => {
                    return subAssessment.id === action.payload.id
                        ? {
                              ...action.payload,
                              typeElement: TYPE_SUB_ASSESSMENT,
                          }
                        : subAssessment;
                }
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getById.fulfilled, (state, action) => {
            const { data } = action.payload.payload;
            state.values = {
                name: data.assessmentName,
                description: data.assessmentDescription,
                contractPhase: data.contractPhase,
                id: data._id,
                version: data._version,
                subAssessments: data.subAssessments.map((s) => ({
                    ...s,
                    typeElement: TYPE_SUB_ASSESSMENT,
                })),
                reviewType: data.reviewTypeId,
                categories: data.categories,
            };
        });
        builder.addCase(createAssessmentCategory.pending, setLoading(true));
        builder.addCase(createAssessmentCategory.fulfilled, setLoading(false));
        builder.addCase(createAssessmentCategory.rejected, setLoading(false));
    },
});

export const {
    init,
    next,
    previous,
    updateValues,
    addCategory,
    removeCategory,
    updateMeta,
    removeSubAssessment,
    moveSubAssessmentOrder,
    addSubAssessments,
    modifySubAssessment,
} = slice.actions;

const selectAssessmentSlice = (state) => state.assessment;
export const selectSubAssessmentIds = createSelector(
    (state) => state.assessment.values.subAssessments,
    (subAssessments) => subAssessments.map((value) => value.id)
);
export const selectAssessmentValues = createSelector(
    [selectAssessmentSlice],
    ({ values, meta }) => ({ values, meta })
);

export default slice.reducer;
