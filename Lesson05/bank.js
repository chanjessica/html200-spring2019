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
	switch(action){
		case 'b':
		case 'B':
			//console.log('Your balance is $' + total);
			//alert('Your balance is $' + total);
			balance();
			break;
		case 'd':
		case 'D':
			amount=prompt('Enter the amount you want to deposit');
			if (Number(amount) > maxD){
				maxCap();
			}
			add(amount);
			break;
			
		case 'w':
		case 'W':
			amount=prompt('Enter the amount you want to withdraw');
			if (Number(amount) > total){
				negativeB();
			}else if ( total - Number(amount) < minB){
				minBalance(amount)
			}
			minus(amount) ;
			break;
		case 'q':
		case 'Q':
			alert('Good Bye');
			break;
	}
}

function reset(){
	total = 0;
	count = 0;
	console.log('total is $' + total);
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
	let goHead=prompt('Your balance will be below $' + minB + '\nDo you want to Continue? Y/N' );
	if (goHead){
		minus(n);
	} else {
		alert('Transaction canceled');
	}
}
function balance(){
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
	action();
}
function add(n){
	total += Number(n);
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
	action();
}
function minus(n){
	total -= Number(n);
	console.log('Your balance is $' + total);
	alert('Your balance is $' + total);
	action();
}
function quit(){
	console.log('Good Bye');
	alert('Good Bye!');
}
