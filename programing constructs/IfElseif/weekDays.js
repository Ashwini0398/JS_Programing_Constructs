const prompt = require('prompt-sync')();
 
const weekDays = prompt('Enter the  Week Days: ');

if(weekDays == 1){
    console.log("Monday")
}
else if(weekDays == 2){
    console.log("Tuesday")
}
else if(weekDays == 3){
    console.log("Wednesday")
}
else if(weekDays == 4){
    console.log("Thrusday")
}
else if(weekDays == 5){
    console.log("Friday")
}
else if(weekDays == 6){
    console.log("Saturday")
}
else {
    console.log("Sunday")
}