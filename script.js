

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