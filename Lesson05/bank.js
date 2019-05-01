/*
	The user should see a prompt so they can type which action to perform.
	The user will have a list of 4 actions to choose from. 
		Enter Q to quit (immediately quits the program).
		Enter W to withdraw. 
			The user will be prompted again to enter an amount to withdraw. 
			After withdrawing money, they should be able to type another option.
		Enter D to deposit.
			The user will be prompted again to enter an amount to deposit. 
			After depositing money, they should be able to type another option.
		Enter B to view balance.
			The user will see their balance. 
			Afterwards, they should be able to type another option.
	The program will loop asking for input until the user enters Q.
	
	Extra challenges: The additional requirements below are optional.
•	The user should not be able to make excessive withdrawals (no negative balances).
•	The user should have a deposit cap of $50,000.
•	The user should receive a warning to protect against low balances.
•	Create an alert if the user tries to withdraw an amount that would leave them with less than $300 in their account, asking them to confirm if they're sure.
*/

let total = 1234;
const minB = 300;
const maxD = 50000;
let amount ;
function action(){
	let action=prompt('Please select your choice: \nB for Balance\nD for deposit \nW for Withdraw \nQ to Quit');
	switch(action.toUpperCase()){
		case 'B':
			//console.log('Your balance is $' + total);
			//alert('Your balance is $' + total);
			balance();
			break;
		case 'D':
			amount=prompt('Enter the amount you want to deposit');
			if (Number(amount) > maxD){
				maxCap();
			} else {
				add(amount);
			}
			break;
		case 'W':
			amount=prompt('Enter the amount you want to withdraw');
			if (Number(amount) > total){
				negativeB();
			} else if ( total - Number(amount) < minB){
				minBalance(amount)
			} else {
				minus(amount) ;
			}
			break;
		case 'Q':
			alert('Good Bye');
			break;
		default:
			alert('I do not know that command');
			tryAgain();
	}
}
function tryAgain(){
	action();
}
function negativeB(){
	alert('You cannot withdraw more than your balcne $' + total + '\n Transaction is canceled');
	action();
}
function maxCap(){
	alert('You cannot deposite more than $'+ maxD  + '\nTransaction is canceled');
	action();
}
function minBalance(n){
	console.log('Your balance is $' + total);
	let m = total - Number(n) ;
	let goHead=prompt('Your balance will be ($' + m + ') below $' + minB + '\nDo you want to Continue? Y/N' );
	switch (goHead){
			case 'y':
			case 'Y':
				minus(n);
				break;
			case 'n':
			case 'N':
				cancel();
				break;
	}
}
function balance(){
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
	checkOut()
	action();
}
function add(n){
	total += Number(n);
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
	checkOut()
	action();
}
function minus(n){
	total -= Number(n);
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
	checkOut()
	action();
}
function cancel(){
	alert('Your transaction is cancelled!');
	checkOut()
	action();
}
function checkOut(){
	var balance = document.getElementById('balance');
	balance.textContent = '$' + total.toFixed(2);
	balance.style.color = "magenta";
	balance.style.fontSize = "xx-large"; 
}
