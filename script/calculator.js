let buttons = document.getElementsByTagName('button');
let calcString = "";
let numbers = [0.0];
let numString = "";
let i = 0;
let tempNum = ""
let screen = document.querySelector('.screen')
let equalTo = document.querySelector('#equalTo')

let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let divide = document.querySelector('#divide')
let multiply = document.querySelector('#multiply')
let decimal = document.querySelector('#decimal')

equalTo.style.gridColumn = "3/5" 

function calculation(calcString) {
    screen.innerText = eval(calcString)
}
for (let button of buttons) {
    button.addEventListener('click', (event) => {

        // equalTo.disabled = true;
        //     plus.disabled = true;
        //     minus.disabled = true;
        //     divide.disabled = true;
        //     multiply.disabled = true;
        //     decimal.disabled = true;

        // if (screen.innerText == "0") {
        //     calcString = "";
            
        // }
        if (event.target.innerText == "+") {
            
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
        }
        if (event.target.innerText == "-") {
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
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
            calculation(calcString)
            equalTo.disabled = true;
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            calcString = "";
        }
        else if (event.target.value == "/") {
            calcString += event.target.value;
            screen.innerText = calcString;
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
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
        }
        else if ((event.target.innerText) == "C") {
            calcString = "0";
            screen.innerText = calcString;
            plus.disabled = true;
            minus.disabled = true;
            divide.disabled = true;
            multiply.disabled = true;
            decimal.disabled = true;
            equalTo.disabled = true;
        }
        else {
            screen.innerText == "0"?calcString = event.target.innerText: calcString += event.target.innerText;
            screen.innerText = calcString;
            console.log(calcString)
        }
         if ((event.target.innerText) == "1") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "2") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "3") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "4") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "5") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "6") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "7") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "8") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }
        if ((event.target.innerText) == "9") {
            plus.disabled = false;
            minus.disabled = false;
            divide.disabled = false;
            multiply.disabled = false;
            decimal.disabled = false;
            equalTo.disabled = false;
        }

    })
}


