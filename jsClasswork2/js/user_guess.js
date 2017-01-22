// One number

// var user_guess = prompt("Введите число ", "");
// var number = Math.ceil(Math.random()*Number(user_guess));

// document.write("Случайное число от 1 до " + user_guess + ": " + number);

// Two numbers

var user_input1 = Number(prompt("Введите первое число ", "")), minNumber;
var user_input2 = Number(prompt("Введите второе число ", "")), maxNumber;

if (user_input1 < user_input2) {
	minNumber = user_input1;
	maxNumber = user_input2;
} else{
	minNumber = user_input2;
	maxNumber = user_input1;
};

var randNumber = Math.ceil(Math.random()*(maxNumber - minNumber));

document.write("Случайное число от " + minNumber +" до " + maxNumber + ": " + randNumber);


