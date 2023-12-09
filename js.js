let newNumber = 0;
let currentSum = null;
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
        newNumber = parseInt(`${newNumber}${val}`);
        displayValue = newNumber;
    } else {

        // anything else
        if (val == "=") {
            if (typeof currentSum !== null) {

                if (divideByZero()) {
                    return;
                }
                currentSum = operate(currentSum, newNumber, operator);
                newNumber = 0;
                operator = "+";
                displayValue = `${currentSum}`;
            }
        }
        if (val == "+" || val == "-" || val == "*" || val == "/") {
            typeof currentSum !== null ? currentSum : currentSum = 0;

            if (divideByZero(val)) {
                return;
            };
            currentSum = parseInt(operate(currentSum, newNumber, operator));
            operator = val;
            newNumber = 0;
            displayValue = `${currentSum}`;

        }
        if (val == "clear") {
            newNumber = 0;
            currentSum = null;
            operator = "+";
            displayValue = "0";
        }
    }

    updateDisplay(Math.round(displayValue * 10000) / 10000);

}


// checks if a division by zero is attempted. cancels it and retarts the calculator
function divideByZero(op = "") {
    if ((operator == "/" || op == "/") && (currentSum == 0 || newNumber == 0)) {
        updateDisplay(display.textContent = "Nice try!");
        newNumber = 0;
        return true;
    }
    return false;
}

// updates the value on the display
function updateDisplay(value) {
    display.textContent = value;
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
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}