function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

let inputString="";

function operate(firstNum, operator, secondNum){
    switch (operator){
        case "+":
            return add(firstNum, secondNum);
            break;

        case "-":
            return subtract(firstNum, secondNum);
            break;
        case "*":
            return multiply(firstNum, secondNum);
            break;
        case "/":
            return divide(firstNum, secondNum);
            break;
    }
};


const button=document.querySelectorAll('.button')
const display=document.getElementById('calculator-display')

button.forEach(btn=>btn.addEventListener("click",()=>{
    inputString+=btn.textContent;
    display.textContent=inputString;

}))

const clearButton=document.querySelector('#clear')
clearButton.addEventListener('click',()=>{
    inputString="";
    display.textContent="";
})
const equalsButton=document.querySelector('#equals')
let operationsArr="";
let firstNumber;
let operation;
let secondNumber;
let result;
equalsButton.addEventListener("click", ()=>{
    
    if (inputString.includes('+')){
        operationsArr=inputString.split('+');
        operation="+";
    } else if (inputString.includes('-')){
        operationsArr=inputString.split('-');
        operation="-";
    } else if (inputString.includes('*')){
        operationsArr=inputString.split('*');
        operation="*";
    } else if (inputString.includes('/')){
        operationsArr=inputString.split('/');
        operation="/";
    } ;
    firstNumber=parseFloat(operationsArr[0]);
    secondNumber=parseFloat(operationsArr[1]);
    result=operate(firstNumber, operation, secondNumber).toPrecision(12);
    display.textContent=result;
    inputString=result;
    
})