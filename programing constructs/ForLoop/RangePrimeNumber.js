const prompt = require('prompt-sync')();
 
var number1 =  prompt('Enter the number1 : ');
var number2 =  prompt('Enter the number2 : ');



for(var i= number1 ;i < number2; i++){
    var temp = 0;
    for(var j= 2; j< i-1 ;j++){
        if(i%j == 0){
            temp =+ 1;
        }
    }
    if(temp == 0)
    {
        console.log("Number is prime: " + i);
    }
    else{
        temp = 0;
        console.log("number is not prime: " + i );
    }
}