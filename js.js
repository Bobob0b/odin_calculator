
let num1;
let num2;
let operator;


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