const prompt = require('prompt-sync')();
console.log("Press 1 for Convert from celcius to farenheit");
console.log("Press 2 for Conver from Farenheit to celcius"); 


const conversion = () => {     
    var choice = prompt('Enter your choice  : ');
    var input = prompt(" Enter the value to convert:");
    switch(choice){
        case '1':
            var degC = input;
            if(degC > -1  && degC < 101){
                var degF = (degC * 9/5) + 32;
                console.log("Convert from degC celcius DegF Farenheit:" +degF);
            }else{
                console.log("enter the valid input for conversion.");
            }
            break;
        
        case '2':
            var degF = input;
            if(degF > 31  && degF < 213){
                var degC = (degF - 32) * 5/9;
                console.log("Convert from  Farenheit to celcius" +degC);
            }else{
                console.log("enter the valid input for conversion.");
            }
            break;
    }
}
conversion();