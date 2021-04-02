
const prompt = require('prompt-sync')();
 
const date = prompt('Enter the date: ');
const month = prompt('Enter the Month: ');

if( month > 3 &&  month < 6 &&  date< 31 )
{
    console.log("True");
}else if( month == 3 && date >= 20 && date < 31 )
{
    console.log("True");
}else if( month == 6 && date > 20)
{
    console.log("true");
}
else{
    console.log("false");
}








  