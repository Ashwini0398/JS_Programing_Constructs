const prompt = require('prompt-sync')();
 
var number1 =  prompt('Enter the number1 : ');

// fact = 1;
// for(var i = 1; i <= number1  ;i++)
// {
//     fact *= i;
//     console.log("the factorial of the given number is " + fact);
// }

var i = number1;
let recuursion = () =>
{
    i--;
    if( i > 0 )
    {
      number1 *= i;
      recuursion(); 
    }
}
recuursion();
console.log(number1);
