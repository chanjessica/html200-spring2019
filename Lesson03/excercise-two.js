/*
	Take a sentence of at least five words and a period.
	Make an array from that sentence and console.log the third word.
*/

let two='A primitive value is a value that has no properties or methods.';
convertToArray=two.split(' ');
console.log(convertToArray.slice(2,3));
