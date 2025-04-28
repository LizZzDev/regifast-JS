const BaseModel = require('./BaseModel');

class AnswerQuestionDisplayRelation extends BaseModel {
    static get tableName() {
        return 'answerQuestionDisplayRelation';
    }

    static get modifiers() {
        return {
            orderByRelationLevel(builder) {
                builder.orderBy('relationLevel');
            },
        };
    }

    static get relationMappings() {
        return {
            answer: {
                relation: BaseModel.BelongsToOneRelation,
                modelClass: 'Answer',
                join: {
                    from: [
                        'answerQuestionDisplayRelation.answerId',
                        'answerQuestionDisplayRelation.answerVersion',
                    ],
                    to: ['answer.id', 'answer.version'],
                },
            },
            question: {
                relation: BaseModel.HasOneThroughRelation,
                modelClass: 'Question',
                join: {
                    from:
                        'answerQuestionDisplayRelation.dependentSubAssessmentQuestionMapId',
                    through: {
                        from: 'subAssessmentQuestionMap.id',
                        to: [
                            'subAssessmentQuestionMap.questionId',
                            'subAssessmentQuestionMap.questionVersion',
                        ],
                    },
                    to: ['question.id', 'question.version'],
                },
            },
        };
    }
}

module.exports = AnswerQuestionDisplayRelation;
