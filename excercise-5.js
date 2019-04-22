const suits=['Clubs' , 'Diamonds' , 'Hearts', 'Spades'];
const values=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
for(let i = 0; i < suits.length; i++){
	for(let j = 0; j < values.length; j++){
		console.log(values[j] + ' of ' + suits[i]);
	}
}

/*
  Create an array with two arrays inside of it 
    The first is the four suits of cards
    The second is the name of each card ”ace”, “one”…”king”
*/
const deck=[ ['Clubs' , 'Diamonds' , 'Hearts', 'Spades'],['A','2','3','4','5','6','7','8','9','10','J','Q','K'] ];
suits=deck[0].length;
values=deck[1].length;
for(let i = 0; i < suits; i++){
	for(let j = 0; j < values; j++){
		console.log(deck[0][i] + ' of ' + deck[1][j]);
	}
}
