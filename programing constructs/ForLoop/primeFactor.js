const prompt = require('prompt-sync')();
 
var number =  prompt('Enter the number : ');
console.log("prime numbers are:")
for(var i = 2; number != 1;)
{
    if(number%i ===  0 )
    {
        console.log(i + " ,");
        number = number/ i;
    }
    else{
        i++;
    }
}