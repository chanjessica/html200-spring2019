function greeting()
{
   alert('Welcome to the World!')
}

function sqIt(){
   let x=prompt('please enter a numer:');
   alert(x+'*'+x+'='+Number(x)*Number(x));
}
function mathIt(){
   let a=prompt('please enter your numer:');
   let operator=prompt('enter the math operator (+ - * / %): ');
   let b=prompt('please enter your other numer:');
   let result=0;

   if (operator == '+' || operator =='add' || operator == 'ADD') {
      result= Number(a)+Number(b);
   } else if (operator == '-' || operator == 'subtract' || operator == 'SUBTRACT') {
      result= Number(a)-Number(b);
   } else if (operator == '*' || operator =='multiply' || operator == 'MULTIPLY') {
      result= Number(a)*Number(b);
   } else if (operator == '/'  || operator =='divide'   || operator =='DIVIDE' ){
      result= Number(a)/Number(b);
   } else if (operator == '%'  || operator == 'mod' || operator == 'MOD' ){
      result= Number(a)%Number(b);
   }
   log=a + ' ' + operator +' '+ b + ' = ' + result ;
   console.log(' result is ' + log); 
   alert(log);
}
