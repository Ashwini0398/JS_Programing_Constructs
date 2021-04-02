const prompt = require('prompt-sync')();
 
const number = prompt('Enter the number to convert it in  place value: ');

switch(true)
{
    case number == 1:
        var feet = prompt("enter the feet: ");
        var inches=prompt( "enter the inches:");
        var calculate = feet * inches ;
        console.log("feet to inches calulation: " + calculate);
        break;

    case number == 2:
        var inches=prompt( "enter the inches:");
        var feet = prompt("enter the feet: ");
        var calculate =  inches / feet  ;
	    console.log("inches to feet : "+ calculate);
        break;

	case number == 3:
        var feet = prompt("enter the feet: ");
        var meter=prompt( "enter the meter:");
        var calculate =  feet / meter  ;
	    console.log("inches to feet : "+ calculate);
        break;
	case number == 4:
        var meter=prompt( "enter the meter:");
        var feet = prompt("enter the feet: ");
        var calculate =  meter / feet ;
	    console.log("inches to feet : "+ calculate);
        break;
    default:
        console.log ("choose 1 to 2 only!!!");
        
}