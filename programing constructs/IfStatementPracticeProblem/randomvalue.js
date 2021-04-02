var num1 = Math.floor(Math.random()*999)+100;
var num2 = Math.floor(Math.random()*999 )+100;
var num3 = Math.floor(Math.random()*999 )+100;
var num4 = Math.floor(Math.random()*999 )+100;
var num5 = Math.floor(Math.random()*999 )+100;
{
if ( num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 ){
    console.log("Number 1 is maximum: " + num1);
}
else if( num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 ){
    console.log("Number 2 is maximum: " + num2);
}
else if( num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 ){
    console.log("Number 3 is maximum: " + num3);
}
else if( num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 ){
    console.log("Number 4 is maximum: "+ num4);
}
else{
    console.log("Number 5 is maximum: " + num5 );
}
}
{
if ( num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5 ){
    console.log("Number 1 is minimum: " + num1);
}
else if( num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5 ){
    console.log("Number 2 is minimum: " + num2);
}
else if( num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5 ){
    console.log("Number 3 is minimum: " + num3);
}
else if( num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5 ){
    console.log("Number 4 is minimum: " + num4);
}
else{
    console.log("Number 5 is minimum: " + num5);
}
}
    