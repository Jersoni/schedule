const subject1 = document.querySelector(".column-1 > div:nth-of-type(1)")
const main = document.getElementsByTagName("main")

const detailsElement = document.getElementById('details-div')
const backShadow = document.getElementById('backshadow-div')

// open details page
subject1.addEventListener('click', () => {
    detailsElement.classList.add('details-container')
    detailsElement.style.display = "block"
    backShadow.classList.add('backshadow')
    setTimeout(() => {
        detailsElement.style.transform = "translateY(-100%)"
    }, 10)
})

// close details page
document.querySelector('.close').addEventListener('click', () => {
    backShadow.classList.remove('backshadow')
    detailsElement.style.transform = "translateY(0)"
    setTimeout(() => {
        detailsElement.style.display = "none"
    }, 500);

})

setInterval(() => {
    if(true){

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