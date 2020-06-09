function getData() {
    const data = {
        title: "Unified Modeling Language Theory Test",
        subject:'Unified Modeling Language',
        time:100,// minute
        score:100,
        id: 'exam_01',
        questions: [
            {
                type: 1,
                label: 'Fill in the blanks',
                point: 5,
                data: [
                    {
                        question: 'The full name of uml in Chinese is:',
                        input_count: 1,
                        default_inputs: ['Unified Modeling Language'],
                        id: 'q01001'
                    },
                    {
                        question: 'The most prominent feature of object is:',
                        input_count: 3,
                        default_inputs: ['Encapsulation', 'Inheritance', 'Polymorphism'],
                        id: 'q01002'
                    }
                ]
            },
            {
                type: 2,
                label: 'Single choice question',
                point: 10,
                data: [
                    {
                        question: 'The relationship between UML and software engineering is:',
                        id: 'q02001',
                        options: [
                            {
                                label: 'UML is software engineering',
                                value: 'A'
                            },
                            {
                                label: 'UML participates in several stages of the software development process in software engineering',
                                value: 'B'
                            },
                            {
                                label: 'UML has nothing to do with software engineering',
                                value: 'C'
                            },
                            {
                                label: 'UML is part of software engineering',
                                value: 'D'
                            }
                        ]
                    },
                    {
                        question: 'Java language support:',
                        id: 'q02002',
                        options: [
                            {
                                label: 'Single inheritance',
                                value: 'A'
                            },
                            {
                                label: 'Multiple inheritance',
                                value: 'B'
                            },
                            {
                                label: 'Single inheritance and multiple inheritance support',
                                value: 'C'
                            },
                            {
                                label: 'Single inheritance and multiple inheritance are not supported',
                                value: 'D'
                            }
                        ]
                    }
                ]

            },
            {
                type: 3,
                label: 'Multiple choice',
                point: 10,
                data: [
                    {
                        question: 'The granularity of the use case is divided into the following three:',
                        id: 'q03001',
                        options: [
                            {
                                label: 'Overview level',
                                value: 'A'
                            },
                            {
                                label: 'Demand level',
                                value: 'B'
                            },
                            {
                                label: 'User target level',
                                value: 'C'
                            },
                            {
                                label: 'Sub-function level',
                                value: 'D'
                            }
                        ]
                    },
                    {
                        question: 'The class diagram consists of which of the following three parts:',
                        id: 'q03002',
                        options: [
                            {
                                label: 'Name',
                                value: 'A'
                            },
                            {
                                label: 'Attribute',
                                value: 'B'
                            },
                            {
                                label: 'Operations',
                                value: 'C'
                            },
                            {
                                label: 'Function',
                                value: 'D'
                            }
                        ]
                    }
                ]
            },
            {
                type: 4,
                label: 'True or False',
                point: 10,
                data: [
                    {
                        question: 'Use case diagrams are only used to communicate and communicate with customers to determine demand.',
                        id: 'q04001'
                    },
                    {
                        question: 'In the state diagram,,the terminations state allows any number of multiples in a state diagram.',
                        id: 'q04002'
                    }
                ]
            },
            {
                type: 5,
                label: 'Short answer question',
                point: 20,
                data:[
                    {
                        question: 'Briefly describe what the model is and how it behaves?',
                        maxLength:500,
                        id: 'q05001'
                    }
                ]
            }
        ]
    }
    return data
}