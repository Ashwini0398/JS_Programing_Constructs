const prompt = require('prompt-sync')();
 
const a = prompt('Enter the  a value: ');
const b = prompt('Enter the  b value: ');
const c = prompt('Enter the  c value: ');

const num1 = a + b * c;
const num2 = a % b + c ;
const num3 = c + a / b;
const num4 = a * b + c;

{
if ( num1 > num2 && num1 > num3 && num1 > num4  ){
    console.log("Number 1 is maximum: " + num1);
}
else if( num2 > num1 && num2 > num3 && num2 > num4 ){
    console.log("Number 2 is maximum: " + num2);
}
else if( num3 > num1 && num3 > num2 && num3 > num4  ){
    console.log("Number 3 is maximum: " + num3);
}
else {
    console.log("Number 4 is maximum: "+ num4);
}
}

{
if ( num1 < num2 && num1 < num3 && num1 < num4  ){
    console.log("Number 1 is minimum: " + num1);
}
else if( num2 < num1 && num2 < num3 && num2 < num4  ){
    console.log("Number 2 is minimum: " + num2);
}
else if( num3 < num1 && num3 < num2 && num3 < num4  ){
    console.log("Number 3 is minimum: " + num3);
}
else if( num4 < num1 && num4 < num2 && num4 < num3  ){
    console.log("Number 4 is minimum: " + num4);
}
}