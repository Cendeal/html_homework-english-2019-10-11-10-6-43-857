const $ITA = document

function generateQuestionsTemplate(questions) {
    let nodes = []
    for (let i = 1; i <= questions.length; i++) {
        let question = questions[i - 1]
        let node = $ITA.createElement('div')
        //question type title
        let titleNode = $ITA.createElement('h1')
        titleNode.setAttribute('class', `questions_title`)
        //question list
        let dataNode = $ITA.createElement('ol')
        dataNode.setAttribute("start", '1')
        let total_score = question.point * question.data.length
        //question data item
        question.data.forEach(item => {
            let tempNode = null
            switch (question.type) {
                case 1:
                    total_score += (item.input_count - 1) * question.point
                    tempNode = blanksTemplate(item)
                    break
                case 2:
                    tempNode = singleChoiceTemplate(item)
                    break
                case 3:
                    tempNode = multipleChoiceTemplate(item)
                    break
                case 4:
                    tempNode = trueOrFalseTemplate(item)
                    break
                case 5:
                    tempNode = shortAnswerTemplate(item)
                    break
            }
            if (tempNode) {
                dataNode.appendChild(tempNode)
            }
        })
        titleNode.innerText = `${i + '、'}${question.label}(${question.point} points per space,${total_score} points total)`
        node.append(titleNode)
        node.append(dataNode)
        nodes.push(node)
    }
    let submitDiv = $ITA.createElement('div')
    let submitButton = $ITA.createElement('button')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('class', 'submit-btn')
    submitButton.innerText = 'Calculating score'
    submitDiv.append(submitButton)
    nodes.push(submitDiv)
    return nodes
}

function blanksTemplate(data) {
    let qNode = $ITA.createElement('li')
    qNode.setAttribute('class', `blanks_question`)
    qNode.innerText = data.question
    for (let i = 0; i < data.input_count; i++) {
        let input = $ITA.createElement('input')
        input.setAttribute("name", `${data.id}_${i + 1}`)
        input.setAttribute("class", `blanks_input`)
        if (data.default_inputs[i] !== undefined) {
            input.setAttribute('value', data.default_inputs[i])
        }
        qNode.appendChild(input)
    }
    return qNode
}

function choiceTemplate(data, isSingle = true) {
    let qNode = $ITA.createElement('div')
    let titleNode = $ITA.createElement('li')
    titleNode.setAttribute('class', `choice_question`)
    titleNode.innerText = data.question
    qNode.append(titleNode)
    data.options.forEach(item => {
        let optionsList = $ITA.createElement('div')
        let input = $ITA.createElement('input')
        input.setAttribute("name", `${data.id}`)
        input.setAttribute("type", isSingle ? 'radio' : 'checkbox')
        input.setAttribute("class", `choice_${isSingle ? 'radio' : 'checkbox'}`)
        input.setAttribute('value', item.value)

        let label = $ITA.createElement('span')
        label.innerText = `(${item.value})${item.label}`
        optionsList.append(input, label)
        qNode.append(optionsList)
    })
    return qNode
}

function singleChoiceTemplate(data, type) {
    return choiceTemplate(data, type)
}

function multipleChoiceTemplate(data,) {
    return choiceTemplate(data, false)
}

function trueOrFalseTemplate(data) {
    let qNode = $ITA.createElement('li')
    qNode.setAttribute('class', `true_or_false_question`)
    qNode.innerText = data.question

    let falseRadio = $ITA.createElement('input')
    falseRadio.setAttribute("name", `${data.id}`)
    falseRadio.setAttribute("type", 'radio')
    falseRadio.setAttribute("value", 'false')

    let trueRadio = $ITA.createElement('input')
    trueRadio.setAttribute("name", `${data.id}`)
    trueRadio.setAttribute("type", 'radio')
    trueRadio.setAttribute("value", 'true')


    let falseSpan = $ITA.createElement('span')
    falseSpan.innerText = 'x'
    let trueSpan = $ITA.createElement('span')
    trueSpan.innerText = '√'

    qNode.append(trueRadio, trueSpan, falseRadio, falseSpan)
    return qNode

}

function shortAnswerTemplate(data) {
    let qNode = $ITA.createElement('li')
    qNode.setAttribute('class', `short_answer_question`)
    qNode.innerText = data.question
    let div = $ITA.createElement('div')
    let answer = $ITA.createElement('textarea')
    answer.setAttribute('type', 'text')
    answer.setAttribute("class", `short_answer_textarea`)
    answer.setAttribute('minlength', data.maxLength)
    answer.setAttribute('rows','10')
    answer.setAttribute('cols','120')
    div.append(answer)
    qNode.append(div)
    return qNode
}

function bindNode(node, object, key) {
    Object.defineProperty(object, key, {
        set(v) {
            node.innerText = v
        },
        get() {
            return node.innerText
        }
    })
}
