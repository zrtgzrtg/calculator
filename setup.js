
let temp = document.querySelector(".button-container")
const arrayButton = Array.from(temp.querySelectorAll("button"))

arrayButton.forEach(btn => {
    btn.classList.add(`${btn.textContent}`)
    btn.classList.add("uiButton")
})
