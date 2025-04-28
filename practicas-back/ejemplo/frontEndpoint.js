import * as endpoints from '../constants/endpoints';
import * as router from '../constants/router';
import axios from 'axios';

export async function addAssessment(assessment, { isDraft = false }, thunkApi) {
    try{
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.ADD_ASSESSMENT, 
            {
                payload: {
                    assessment,
                    isDraft,
                },
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
        } catch (error) {
        console.error("Request error in add assessment:", error);
    }
}

export async function getAssessments(
    { searchString, filters, pagination },
    thunkApi
) {
    try {
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.GET_ASSESSMENTS, 
            {
                payload: {
                    searchString,
                    filters,
                    pagination,
                },
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Request error in get assessments :", error);
        throw error;
    }
}

export async function deactivateAssessment(payload, thunkApi) {
    try{
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.DEACTIVATE_ASSESSMENT, 
            {
                payload
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
        } catch (error) {
        console.error("Request error in deactivate assessment:", error);
    }
}

export async function activateAssessment(payload, thunkApi) {
    try{
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.ACTIVATE_ASSESSMENT, 
            {
                payload
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
        } catch (error) {
        console.error("Request error in activate assessment:", error);
    }
}

export async function duplicateAssessment(payload, thunkApi) {
    try{
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.DUPLICATE_ASSESSMENT, 
            {
                payload
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
        } catch (error) {
        console.error("Request error in duplicate assessment:", error);
    }
}

export async function deleteAssessment(payload, thunkApi) {
    try{
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.DELETE_ASSESSMENT_BY_ID, 
            {
                payload
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
        } catch (error) {
        console.error("Request error in delete assessment:", error);
    }
}

export async function getById(payload, thunkApi) {
    try{
        const response = await axios.post("http://localhost:4000" + router.ASSESSMENT_API + endpoints.GET_ASSESSMENT_BY_ID, 
            {
                payload
            },{
                headers: {
                    'Authorization': `${localStorage.getItem('w3IdToken')}`
                }
            }
        );
        return response.data;
        } catch (error) {
        console.error("Request error in get assessment by id:", error);
    }
}

//endpoints hacer en constant export const SUB_ASSESSMENTS_ACTIVATE = 'activateSubAssessments';
//rutas hacer en constant export const QUESTION_API = "/v1/questionApi/";