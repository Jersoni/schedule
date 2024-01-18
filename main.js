const date = new Date()
const dateToday = document.querySelector('.date')
const weekday = document.querySelector('.week-day')

dateToday.textContent = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
weekday.textContent = date.toLocaleString('en', { weekday: 'long' })

// date
let column = '1'
column = weekday.textContent === 'Monday' || weekday.textContent === 'Wednesday' 
    ? '1'
    : '2'

// time
let row = '1'

const hour = date.getHours()
const minute = date.getMinutes()

if (hour < 9) {
    row = '1'
} else if (hour < 10 || (hour === 10 && minute < 30)) {
    row = '2'
} else if (hour < 13) {
    row = '3'
} else if (hour < 14 || (hour === 14 && minute < 30)) {
    row = '4'
} else if (hour < 15) {
    row = '5'
} else if (hour < 24) {
    row = '6'
} else {
    console.log('error')
    console.log(`${hour} : ${minute}`)
}

let subjectElement = document.querySelector(`.column-${column} > div:nth-of-type(${row})`)
subjectElement.style.border = '1px solid rgba(77, 150, 184, .5)'
