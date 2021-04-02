const prompt = require('prompt-sync')();
 
const Leapyear = prompt('Enter the year: ');

if(Leapyear % 4 ==0 ){
    if(Leapyear % 100 ==0){
        if(Leapyear % 400 == 0){

            console.log("The year " + Leapyear + " is a leap year");
        }
      else{
        console.log("The year " + Leapyear + " is  not a leap year");
      }  
    }
    else{
        console.log("The year " + Leapyear + " is a leap year");
    }
} else{
    console.log("The year " + Leapyear + " is  not a leap year");
}  