const prompt = require('prompt-sync')();
 
var number =  prompt('Enter the number : ');

for (var i = 1 ; i <= number ; i++)
{
    let power = 2 * number;
    console.log("The table of 2 is " + power);
}
