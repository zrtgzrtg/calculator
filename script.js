

function add(num1,num2) {
    return num1+num2
}
function substract(num1,num2){
    return num1-num2
}
function multiply(num1,num2) {
    return num1 * num2
}
function divide(num1,num2) {
    if(num2 === 0) {
        throw Error("Cannot divide by 0")
    }
    return num1 / num2
}

let firstNumber = 0
let secondNumber = 0
let operator = ""

function operate(num1,operator,num2) {
    const legalOperators = ["+","-","*","/"]
    if(!operator in legalOperators) {
        throw Error("Illegal Operation chosen: " + operator)
    }
    switch(operator) {
        case "+":
            return add(num1,num2)
        case "-":
            return substract(num1,num2)
        case "*":
            return multiply(num1,num2)
        case "/":
            return divide(num1,num2)
    }
}
const buttonContainer = document.querySelector(".button-container")
const display = document.querySelector(".display")
let valueArray = []
//function inputNumber() {
    const allButtons = Array.from(buttonContainer.querySelectorAll("button"))
    const allSymbolButtons = allButtons.filter(btn => legalSymbolButtons.includes(btn.id) )
    buttonContainer.addEventListener("click", event => {
        let eID = event.target.id
        if(legalSymbolButtons.includes(eID)) {
            displaySymbol(eID)
        } else if(eID === "DEL") {
            delButton()
        } else if(eID === "CE") {
            ceButton()
        } else if(eID === "e") {
            eulerButton()
        } else if(eID === "π") {
            piButton()
        }
    })
//}
function displaySymbol(symbol) {
    display.textContent += symbol
    valueArray.push(symbol)
    console.log(valueArray)
}
function delButton() {
    display.textContent = display.textContent.slice(0,-1)
    valueArray.pop()
    console.log(valueArray)
}
function ceButton() {
    display.textContent = ""
    valueArray = []
    console.log(valueArray)
}
function eulerButton() {
    const dispNumber = roundToDepth(Math.E,2)
    display.textContent +=  dispNumber
    valueArray.push(dispNumber)
    console.log(valueArray)
    
}
function piButton() {
    const dispNumber = roundToDepth(Math.PI,2)
    display.textContent += dispNumber
    valueArray.push(dispNumber)
    console.log(valueArray)
}
function roundToDepth(number ,depth) {
    const multiplier = Math.pow(10, depth)
    return Math.round(number*multiplier)/multiplier
}