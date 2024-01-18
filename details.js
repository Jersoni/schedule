let subject1 = document.querySelector(".column-1 > div:nth-of-type(1)")
let main = document.getElementsByTagName("main")

let detailsElement = document.getElementById('details-div')
let backShadow = document.getElementById('backshadow-div')

subject1.addEventListener('click', () => {
    detailsElement.classList.add('details-container')
    backShadow.classList.add('backshadow')

    setTimeout(() => {
        detailsElement.style.transform = "translateY(-100%)"
    }, 100)
})