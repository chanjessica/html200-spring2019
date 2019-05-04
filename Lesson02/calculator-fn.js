var a,b, result, operator, log;

function calculator(operator){
   if (operator == '+') {
      result = a+b;
   } else if (operator == '-') {
      result = a-b;
   } else if (operator == '*') {
      result = a*b;
   } else if (operator == '/'){
      result = a/b;
   } else if (operator == '%'){
      result = a%b;
   }
   log=a + operator + b + ' = ' + result ;
   return log;
}

var a = 9, b = 6, action = '+';
console.log(calculator(action)); 

var a = 9, b = 6, action = '-';
console.log(calculator(action)); 

var a = 9, b = 6, action = '*';
console.log(calculator(action)); 

var a = 9, b = 6, action = '/';
console.log(calculator(action)); 

var a = 9, b = 6, action = '%';
console.log(calculator(action)); 
