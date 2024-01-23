const subject1 = document.querySelector(".column-1 > div:nth-of-type(1)")
const main = document.querySelector(".main")

const detailsElement = document.getElementById('details-div')
const backShadow = document.getElementById('backshadow-div')

// 

const subjects = document.querySelectorAll(".subject")
let subjectsArray = []

subjects.forEach(subject => {
    subjectsArray.push(subject)
})

subjectsArray.forEach(subject => {
    subject.addEventListener('click', openDetails)
})

// open details page
function openDetails() {
    detailsElement.classList.add('details-container')
    detailsElement.style.display = "block"
    backShadow.classList.add('backshadow')
    backShadow.style.opacity = "100%"
    setTimeout(() => {
        detailsElement.style.bottom = "0px"
    }, 10);

    // apply changes to details page according to which subject
    const subjectInfo = document.querySelector('.subject-info')
    const descriptionInfo = document.querySelector('.description-info')
    const scheduleInfo = document.querySelector('.schedule-info')
    const instructorInfo = document.querySelector('.instructor-info')

    function passInDetailsInformation(subject, description, schedule, instructor) {
        subjectInfo.textContent = subject
        descriptionInfo.textContent = description
        scheduleInfo.textContent = schedule
        instructorInfo.textContent = instructor
    }

    if(this === subjectsArray[0] || this === subjectsArray[4]) {
        let schedule
        if (this === subjectsArray[0]) {
            schedule = '7:30 am - 9:00 am'
        } else {
            schedule = '2:30 pm - 4:00 pm'
        }
        passInDetailsInformation(
            'IT 223',
            'Systems Administration and',
            schedule,
            'A. Ranido'
        )
    } else if (this === subjectsArray[1] || this === subjectsArray[6]) {
        let schedule
        if (this === subjectsArray[1]) {
            schedule = '9:00 am - 10:00 am'
        } else {
            schedule = '7:30 am - 9:00 am'
        }
        passInDetailsInformation(
            'IT 222 A',
            'Fundamentals of Information',
            schedule,
            'Arnel Baguinon'
        )
    } else if (this === subjectsArray[2]) {
        passInDetailsInformation(
            'SOCSCI 222',
            'The Contemporary World',
            '10:30 am - 12:00 pm',
            'Christian Gajelan'
        )
    } else if (this === subjectsArray[3] || this === subjectsArray[5]) {
        let schedule
        if (this === subjectsArray[3]) {
            schedule = '1:00 pm - 2:30 pm'
        } else {
            schedule = '4:00 pm - 5:00 pm'
        }
        passInDetailsInformation(
            'IT 221 A',
            'Fundamentals of Systems Integration',
            schedule,
            'Mikko Cablao'
        )
    } else if (this === subjectsArray[7]) {
        passInDetailsInformation(
            'SOC SCI 223',
            'Culture and Society in Southeast Asia',
            '7:30 am - 9:00 am',
            'Nette Anthony Lomero'
        )
    } else if (this === subjectsArray[8]) {
        passInDetailsInformation(
            'PATH FIT 4A',
            'Sports',
            '10:30 am - 12:00 pm',
            'Myrna Quindao'
        )
    } else if (this === subjectsArray[9] || this === subjectsArray[11]) {
        let schedule
        if (this === subjectsArray[9]) {
            schedule = '1:00 pm - 2:30 pm'
        } else {
            schedule = '4:00 pm - 5:00 pm'
        }
        passInDetailsInformation(
            'COMP 221 A',
            'Application Development',
            schedule,
            'Mich Ombid'
        )
    } else if (this === subjectsArray[10]) {
        passInDetailsInformation(
            'SOC SCI 221',
            'The Life and Works of Rizal',
            '7:30 am - 9:00 am',
            'Nette Anthony Lomero'
        )
    }
}

// close details page
document.querySelector('.close').addEventListener('click', () => {
    detailsElement.style.bottom = "-95vh"
    backShadow.style.opacity = "0"
    setTimeout(() => {
        backShadow.classList.remove('backshadow')
        detailsElement.style.display = "none"
    }, 600);
})

// pointer events behind details page
setInterval(() => {
    if(detailsElement.style.display === "block"){
        main.style.pointerEvents = "none"
    } else {
        main.style.pointerEvents = "all"
    }
}, 100);


// todo item container
const todoItemContainer = document.querySelector('.todo-item-container')
const noRemindersLabel = document.querySelector('.no-reminders')

// adjust textarea height 
setInterval(() => {
    let todoItemTextarea = document.querySelectorAll('.todo-textbox')

    todoItemTextarea.forEach(textArea => {

        textArea.addEventListener('input', () => {
            textArea.style.height = "30px"
            textArea.style.height = textArea.scrollHeight + "px"
        })

        // check todo item is blank
        if (textArea.value === '' && !(document.activeElement === textArea)) {
            removeParentElement(textArea)
        }

        if (document.activeElement === textArea) {
            textArea.parentElement.children[2].style.display = "block"
            textArea.style.paddingRight = "36px"
        } else {
            textArea.parentElement.children[2].style.display = "none"
            textArea.style.paddingRight = "15px"
        }
    })
}, 100);

function removeParentElement(element) {
    element.parentElement.style.transition = "all 0.4s ease"
    element.parentElement.style.opacity = "0"
    setTimeout(() => {
        element.parentElement.remove()
    }, 400);
}

// no reminder label
setInterval(() => {
    if (todoItemContainer.textContent.trim()) {
        noRemindersLabel.style.display = "none"
    } else {
        noRemindersLabel.style.display = "flex"
    }
}, 10);

// check circle / checkbox
let checkboxElements = document.querySelectorAll('.material-symbols-outlined')

setInterval(() => {
    checkboxElements = document.querySelectorAll('.material-symbols-outlined')
}, 100)

checkboxElements.forEach(checkbox => {
    checkbox.textContent = "radio_button_unchecked"
    checkbox.addEventListener('click', () => checkCircleState(checkbox))

})

let removeTextboxTimeout

function checkCircleState(checkbox){
    if(checkbox.textContent === "radio_button_unchecked") {
        checkbox.textContent =  "radio_button_checked"
        checkbox.style.color = "rgb(65, 132, 195)"
        checkbox.parentElement.children[1].color = "rgba(0, 0, 0, .60)"
        removeTextboxTimeout = setTimeout(function() {
            if(checkbox.textContent = "radio_button_unchecked") {
                removeParentElement(checkbox)
            }
            return removeTextboxTimeout
        }, 2000);
    } else {
        checkbox.textContent =  "radio_button_unchecked"
        checkbox.parentElement.children[1].color = "rgba(0, 0, 0, .1)"
        checkbox.style.color = "rgb(180, 180, 180)"
        clearTimeout(removeTextboxTimeout)
    }
}

// add new reminder / todo item
const newReminderButton = document.querySelector('.new-reminder')

newReminderButton.addEventListener('click', () => {
    // create todo item div
    let todoItem = document.createElement("div")
    todoItemContainer.appendChild(todoItem)
    todoItem.classList.add('todo-item')

    // create checkbox inside todo item div
    let checkbox = document.createElement("span")
    checkbox.addEventListener('click', () => checkCircleState(checkbox))
    todoItem.appendChild(checkbox)
    checkbox.classList.add('material-symbols-outlined')
    checkbox.textContent = 'radio_button_unchecked'

    // create textarea inside todo item div
    let textarea = document.createElement("textarea")
    todoItem.appendChild(textarea)
    textarea.classList.add('todo-textbox')
    textarea.focus()

    // create delete button
    let deleteButton = document.createElement("i")
    todoItem.appendChild(deleteButton)
    deleteButton.classList.add("fa")
    deleteButton.classList.add("fa-trash-can")
    deleteButton.addEventListener('click', () => {
        removeParentElement(deleteButton)
    })
})