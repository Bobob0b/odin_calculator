let newNumber = 0;
let currentSum = 0;
let operator = "+";
let displayValue = ""; // start with a new number

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const arrButtons = Array.from(buttons);

arrButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        evaluateInput(button.value);
    });
});




// gets a value and writes it onto the display
function evaluateInput(val) {

    if (!isNaN(val.valueOf())) { // integers
        displayValue = `${displayValue}${val}`
        newNumber = parseInt(displayValue)
    } else {

        // anything else
        if (val == "=") {
            newNumber = parseInt(displayValue);
            currentSum = operate(currentSum, newNumber, operator);
            displayValue = `${currentSum}`;
        }
        if (val == "+" || val == "-" || val == "*" || val == "/") {
            currentSum = parseInt(operate(currentSum, newNumber, operator));
            operator = val;
            newNumber = 0;
            displayValue = `${newNumber}`;
        }
        if (val == "clear") {
            newNumber = 0;
            currentSum = 0;
            operator = "+";
            displayValue = "0";
        }
    }

    display.textContent = displayValue;

}



// gets a value and writes it onto the display
function updateDisplay(val) {


}

// evaluates the operator and calls the appropriate calculation function
function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return sub(a, b);
        case "*":
            return mul(a, b);
        case "/":
            return div(a, b);
    }
}


// functions for calculation

function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}