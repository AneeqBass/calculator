let buttons = document.getElementsByTagName('button');
let calcString = "";
let numbers = [0.0];
let numString = "";
let num1 = "";
let num2 = "";
let i = 0;
let answer = "";
let screen = document.querySelector('.screen')
let equalTo = document.querySelector('#equalTo')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let divide = document.querySelector('#divide')
let multiply = document.querySelector('#multiply')
let decimal = document.querySelector('#decimal')

equalTo.style.gridColumn = "3/5" 

function calculation(calcString) {
    return eval(calcString)
}


for (let button of buttons) {
    button.addEventListener('click', (event) => {

        if ((event.target.innerText) == "1") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "2") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "3") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "4") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "5") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "6") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "7") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "8") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "9") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "0") {
            screen.innerText == "0"?numString = event.target.innerText: numString += event.target.innerText;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }

        if (event.target.innerText == "+") {
            
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
            numString = "";
        }
        if (event.target.innerText == "-") {
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
            numString = "";
        }
        if (event.target.innerText == ".") {
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
        }
        if (event.target.innerText == "=") {
            screen.innerText = calculation(calcString)
            equalTo.disabled = true;
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            calcString = "";
            numString = "";
            num1 = "";
            num2 = "";
        }
        else if (event.target.value == "/") {
            calcString += event.target.value;
            screen.innerText += calcString;
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
            numString = "";
        }
        else if (event.target.innerText == "x") {
            calcString += event.target.value;
            screen.innerText = calcString;
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
            numString = "";
        }
        else if (event.target.innerText == "C") {
            calcString = "0";
            screen.innerText = calcString;
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
            numString = "";
            num1 = "";
            num2 = "";
        }
        else {
            screen.innerText == "0"?calcString = event.target.innerText: calcString += event.target.innerText;

            screen.innerText = calcString;
        }
        
        if (num1 == "" || num2 == ""){
            num1 = "Num1 " + numString;
        }else {
            num2 = "Num2 " + numString;
            
        }

        console.log(numString) 
        console.log(num1) 
        console.log(num2) 
    })
}


