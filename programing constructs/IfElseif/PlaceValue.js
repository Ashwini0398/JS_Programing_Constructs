const prompt = require('prompt-sync')();
 
const placeValue = prompt('Enter the number : ');

if(placeValue < 10 ){
    console.log("Unit place")
}
else if(placeValue < 100){
    console.log("Tens Place")
}
else if(placeValue < 1000){
    console.log("Hundred Place")
}
else if(placeValue < 10000) {
    console.log("Thousand Place")
}
else{
    console.log("other Place")
}
