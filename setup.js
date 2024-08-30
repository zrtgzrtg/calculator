
let temp = document.querySelector(".button-container")
const arrayButton = Array.from(temp.querySelectorAll("button"))

arrayButton.forEach(btn => {
    btn.id = (`${btn.textContent}`)
    btn.classList.add("uiButton")
})
arrayButton.forEach(btn => {
    if(legalExecutorButtons.includes(btn.id)) {
        btn.classList.add("executor-button")
    }
})
