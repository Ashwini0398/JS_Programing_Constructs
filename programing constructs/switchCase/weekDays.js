const prompt = require('prompt-sync')();

const number = prompt('Enter the number to show week days: ');

switch(number){

    case "1" :
        console.log("MONDAY");
        break;
    case "2" :
         console.log("TUESDAY");
         break;
    case "3" :
        console.log("WEDNESDAY");
        break;
    case "4" :
        console.log("THRUSDAY");
        break;
    case "5" :
        console.log("FRIDAY");
        break;
    case "6" :
        console.log("SATURDAY");
        break;
    default:
        console.log("SUNDAY");
}