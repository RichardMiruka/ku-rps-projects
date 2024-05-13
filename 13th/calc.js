// calc.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function area(a, b) {
    return a * b;
}

function perimeter(a, b) {
    return 2 * (a + b);
}

function volume(a, b, c) {
    return a * b * c;
}

function surfaceArea(length, width, height) {
    return 2 * ((length * width) + (length * height) + (width * height));
}

// Export the functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    area,
    perimeter,
    volume,
    surfaceArea
};
