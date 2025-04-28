import React from 'react';
import { useDispatch } from 'react-redux';
import {
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Accordion,
    AccordionItem,
    UnorderedList,
    ListItem,
} from 'carbon-components-react';
import { unwrapResult } from '@reduxjs/toolkit';

import { setLoading, showNotification, closeModal } from '../../app/appSlice';
import {
    fetchSubAssessments,
    deleteById as deleteSubAssessment, 
} from '../../features/SubAssesmentsList/subAssessmentsSlice';
import {
    fetchQuestions,
    deleteById as deleteQuestion,
} from '../../features/QuestionsList/questionsSlice';
import {
    fetchAssessments,
    deleteAssessment, //here deleteAssessment 
} from '../../features/AssessmentsList/assessmentsSlice';

function DeleteModal({ open, subAssessment, question, assessment }) {
    const dispatch = useDispatch();
    const { id: idVersion } = question ?? subAssessment ?? assessment;
    const [id, version] = idVersion.split('-');
    const handleSecondaryClick = () => {
        dispatch(closeModal());
    };

    const selectElement = () => {
        if (subAssessment) {
            return {
                elementDelete: deleteSubAssessment,
                fetchList: fetchSubAssessments,
            };
        } else if (question) {
            return { elementDelete: deleteQuestion, fetchList: fetchQuestions };
        }
        return { elementDelete: deleteAssessment, fetchList: fetchAssessments };
    };

    const handlePrimaryClick = async () => {
        dispatch(closeModal());
        dispatch(setLoading(true));
        const { elementDelete, fetchList } = selectElement();

        dispatch(elementDelete({ id, version }))
            .then(unwrapResult)
            .then(() => {
                dispatch(fetchList());
                dispatch(
                    showNotification({
                        kind: 'success',
                        title: 'Delete success',
                        timeout: 5000,
                    })
                );
            })
            .catch(({ msg }) => {
                dispatch(
                    showNotification({
                        kind: 'error',
                        title: 'Error',
                        caption: msg,
                    })
                );
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };

    let objectsInstances;
    let instanceCount = 0;
    if (subAssessment) {
        objectsInstances = subAssessment.assessments;
        instanceCount = objectsInstances.length;
    } else if (question) {
        objectsInstances = question.subAssessments;
        instanceCount = objectsInstances.length;
    }

    return (
        <ComposedModal open={open} onClose={handleSecondaryClick}>
            <ModalHeader title="Confirm delete" />
            <ModalBody>
                {instanceCount ? (
                    <>
                        <p>
                            This {subAssessment ? 'Sub-assessment' : 'Question'}{' '}
                            is currently used in {instanceCount}
                            {subAssessment
                                ? ' assessments'
                                : ' Sub-assessments'}{' '}
                            (see affected items list below).
                        </p>
                        <br />
                        <p>
                            <strong>
                                Are you sure you want to proceed deleting the
                                item?
                            </strong>
                        </p>
                        <br />
                        <Accordion>
                            <AccordionItem
                                title={`View affected items (${instanceCount})`}
                            >
                                <UnorderedList>
                                    {objectsInstances.map(
                                        ({
                                            assessmentName,
                                            subAssessmentName,
                                            id,
                                        }) => (
                                            <ListItem key={id}>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            assessmentName ??
                                                            subAssessmentName,
                                                    }}
                                                ></p>
                                            </ListItem>
                                        )
                                    )}
                                </UnorderedList>
                            </AccordionItem>
                        </Accordion>
                    </>
                ) : (
                    <p>Deleting will be permanently.</p>
                )}
            </ModalBody>
            <ModalFooter>
                <Button
                    type="button"
                    kind="secondary"
                    onClick={handleSecondaryClick}
                >
                    Exit
                </Button>
                <Button
                    type="button"
                    kind="danger"
                    onClick={handlePrimaryClick}
                >
                    Delete
                </Button>
            </ModalFooter>
        </ComposedModal>
    );
}

export default DeleteModal;
