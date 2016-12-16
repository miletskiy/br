// Additional task
var numberOne = 42;
var numberTwo = 24;

document.write(numberOne + numberTwo + "<br>");
document.write(numberOne - numberTwo + "<br>");
document.write(numberOne / numberTwo + "<br>");
document.write(numberOne * numberTwo + "<br><hr>");

// Task 3
var integerNumber1 = 15;
var integerNumber2 = 25;
var integerNumber3 = 35;

document.write((integerNumber1 + integerNumber2 + integerNumber3) / 3 + "<br><hr>");

// Task 4

function volumeCylinder(radius, height) {
    return Math.PI * radius * radius * height;
};

function squareCylinder(radius, height) {
    return 2 * Math.PI * radius * (radius + height);
};

var user_radius = prompt("Please enter a radius", 10);
var user_height = prompt("Please enter a height", 15);

document.write("Volume of the cylinder " + volumeCylinder(user_radius, user_height) + "<br>");
document.write("Square of the cylinder " + squareCylinder(user_radius, user_height));
