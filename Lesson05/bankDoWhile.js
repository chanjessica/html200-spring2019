let total = 1234;
const minB = 300;
const maxD = 50000;
let amount ;
let goHead = true;

function action(){
	while (goHead){
		let a = prompt('Please select your choice: \nB for Balance\nD for deposit \nW for Withdraw \nQ to Quit');
		let action = a.toUpperCase();
		if (action == 'Q'){
			goHead = false;
		} else if (action == 'B'){
			balance();
		} else if (action == 'D'){
			add(amount);
		} else if (action == 'W'){
			minus(amount);
		}
	}
	checkOut();
}

function balance(){
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
}

function add(){
	amount = prompt('Enter the amount you want to deposit');
	if (Number(amount) > maxD){
		alert('You cannot deposite more than $'+ maxD  + '\nTransaction is canceled');
	} else {
		total += Number(amount);
	}
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
}

function minus(){
	amount=prompt('Enter the amount you want to withdraw');
	if (Number(amount) > total){
		alert('You cannot withdraw more than your balcne $' + total + '\n Transaction is canceled');
	} else if ( total - Number(amount) < minB){
		let cont=prompt('Your balance will be ($' + ( total - Number(amount) ) + ') below minimum balance $' + minB + '\nDo you want to Continue? Y/N' );
		if (cont.toUpperCase() == 'Y'){
			total -= Number(amount);
		} else {
			alert('Your transaction is cancelled');
		}
	} else {
		total -= Number(amount);
	}
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
}

function checkOut(){
	var balance = document.getElementById('balance');
	balance.textContent = '$' + total.toFixed(2);
	balance.style.color = "magenta";
	balance.style.fontSize = "xx-large"; 
}
