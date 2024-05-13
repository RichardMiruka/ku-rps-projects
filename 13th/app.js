// app.js

var calc = require('./calc.js');

var result = calc.add(4, 5);
var difference = calc.subtract(4, 5);

console.log("output: " + result);
console.log("output: " + difference);
console.log("output: " + calc.multiply(4, 5));
console.log("output: " + calc.divide(4, 5));
console.log("output: " + calc.area(4, 5));
console.log("output: " + calc.perimeter(4, 5));
console.log("output: " + calc.volume(4, 5, 6));
console.log("output: " + calc.surfaceArea(4, 5, 6)); // Note: surfaceArea function added
