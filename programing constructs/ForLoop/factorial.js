
const prompt = require('prompt-sync')();
 
var number =  prompt('Enter the number : ');
var fact = 1;

for( var i = 2; i <= number ;i++)
{
    fact = fact * i ;
    
}
console.log("the factorial of the number is: "+ fact)