
var user_guess = prompt("Монетка в воздухе. Орел или решка ? (с маленькой буквы)", ""), coin;

if (Math.random() < 0.5) {
	coin = "орел"
} else {
	coin = "решка"
};

if (coin == user_guess) {
	document.write("Угадали! ");
}else {
	document.write("Не угадали! Выпало " + coin );
}
