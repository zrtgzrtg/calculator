

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
    let dotPresent = false
    const allSymbolButtons = allButtons.filter(btn => legalSymbolButtons.includes(btn.id) )
    buttonContainer.addEventListener("click", event => {
        let eID = event.target.id
        console.log(eID)
        if(legalSymbolButtons.includes(eID)) {
            displaySymbol(eID)
        } else if(legalExecutorButtons.includes(eID)) {
            parseNumber(eID)
            changeDisplay()
        } else if(eID === "DEL") {
            delButton()
        } else if(eID === "=") {
            resultButton()
        } else if(eID === "CE") {
            ceButton()
            changeDisplay()
        } else if(eID === "e") {
            eulerButton()
        } else if(eID === "π") {
            piButton()
        } else if(eID === ".") {
            if(!dotPresent) {
            dotButton(eID)
            }
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
    calcArray = []
    console.log(valueArray)
}
function eulerButton() {
    const dispNumber = roundToDepth(Math.E,2)
    display.textContent +=  dispNumber
    valueArray.push(dispNumber)
    dotPresent = true
    console.log(valueArray)
    
}
function piButton() {
    const dispNumber = roundToDepth(Math.PI,2)
    display.textContent += dispNumber
    valueArray.push(dispNumber)
    dotPresent = true
    console.log(valueArray)
}
function dotButton(symbol) {
    dotPresent = true
    displaySymbol(symbol)

}
function roundToDepth(number ,depth) {
    const multiplier = Math.pow(10, depth)
    return Math.round(number*multiplier)/multiplier
}


let calcArray = []
function parseNumber(operator) {
    let tempArray = valueArray.slice()
    let numAsString = tempArray.join("")
    let firstNum = parseFloat(numAsString)
    calcArray.push(firstNum)
    if(operator !== null) {
    calcArray.push(operator)
    }
    dotPresent = false
}
const pastDisplay = document.querySelector(".past-display")
function changeDisplay() {
    pastDisplay.textContent = `${calcArray.slice().join("")}`
    display.textContent = ""
    valueArray = []
}
function resultButton() {
    parseNumber(null)
    while(calcArray.length>1) {
    calcArray[0] = helpFunction()
}
    console.log(calcArray)
    display.textContent = `${calcArray[0]}`
    valueArray = []
    valueArray.push(calcArray[0])
    calcArray = []
    pastDisplay.textContent = ""
}
function helpFunction() {
        let operand1 = calcArray[0];
        let operand2 = calcArray[1];
        let operand3 = calcArray[2];

        let resFloatingPoint = operate(operand1,operand2,operand3)
        let res = roundToDepth(resFloatingPoint,2)
        calcArray.splice(1,2)
        return res
}