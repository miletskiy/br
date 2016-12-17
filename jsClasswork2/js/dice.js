
function getDice(){
	var random = Math.random()*100 , dice;
	if (random < 16) {
		dice = 1
	}else if(random < 32){
		dice = 2
	}else if(random < 48){
		dice = 3
	}else if(random < 64){
		dice = 4
	}else if(random < 80){
		dice = 5
	}else if(random > 80 ){
		dice = 6
	}

	return dice;
};

var dice1 = getDice();
var dice2 = getDice();


document.write("Выпали цифры: " + dice1 + " " + dice2);
