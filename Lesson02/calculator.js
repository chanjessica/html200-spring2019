let a,b, result, operator, log;
/*  for testing
 a=9, b=6, operator='+';  
 a=9, b=6, operator='ADD';  
 a=9, b=6, operator='-';  
 a=9, b=6, operator='*';  
 a=9, b=6, operator='/'; 
 a=9, b=6, operator='%'; 
 a=9, b=6, operator='MOD'; 
 */

if (operator == '+' || operator =='add' || operator == 'ADD') {
   result=a+b;
} else if (operator == '- ' || operator == 'subtract' || operator == 'SUBTRACT') {
   result=a-b;
} else if (operator == '*' || operator =='multiply' || operator == 'MULTIPLY') {
   result=a*b;
} else if (operator == '/'  || operator =='divide'   || operator =='DIVIDE' ){
   result=a/b;
} else if (operator == '%'  || operator == 'mod' || operator == 'MOD' ){
   result=a%b;
}
log=a + ' ' + operator +' '+ b + ' = ' + result ;
console.log(log); 
