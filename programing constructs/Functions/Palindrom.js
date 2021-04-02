const prompt = require('prompt-sync')();

function checkPalindrome(str)
{

    var len = str.length;
    
    for (var i = 0; i < len / 2; i++) {
    
        if (str[i] != str[len - i - 1])
            return false;
}
    
    return true;
}
let st = prompt("enter the number : ");
if (checkPalindrome(st) == true)
    console.log(`${st} is a palindrom`);
 else
    console.log(`${st} is not a palindrom`);
        

