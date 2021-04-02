const prompt = require('prompt-sync')();
 
const number =  prompt('Enter the number : ');
var temp = 0;

for ( var i = 2 ; i < number-1; i++)
{
    if(number%i == 0)
    {
        temp =+ 1;
    }
}
if( temp > 0){
    console.log("Not a prime number: " + number)
}else{
    console.log("Prime number: "+number)
}

