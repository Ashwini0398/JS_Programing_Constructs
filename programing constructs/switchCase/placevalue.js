const prompt = require('prompt-sync')();
 
var number = prompt('Enter the number to convert it in  place value: ');

switch(true)
{
    case number <= 9 :
        console.log("Unit Place");
    break;
    case number <= 99 :
        console.log("Tens Place");
    break;
    case number <= 999 :
        console.log("Hundred Place");
    break;
    case number <= 9999 :
        console.log("Thousand Place");
    break;
    default:
        console.log("other place");

}