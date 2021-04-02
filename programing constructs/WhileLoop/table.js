const prompt = require('prompt-sync')();
var number =  prompt('Enter the number : '); 
while (number <= 256){
    console.log(number);
    number =  2 * number;
} 
    