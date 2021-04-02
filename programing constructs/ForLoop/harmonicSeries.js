const prompt = require('prompt-sync')();
 
var number =  prompt('Enter the number : ');

var s = 0.0;
for(let i =1 ; i <=number ;i++)
{
    s = s + 1 / i;
    
    console.log("the sum of the series are " + s + " term is : " + number)
}