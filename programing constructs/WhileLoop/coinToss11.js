var head = 0;
var tail = 0;

while( head != 11 && tail != 11){
    var cointoss = Math.floor(Math.random()*2);
    if( cointoss == 0){
        head++;
    }
    else{

        tail++ ;
    }

}
if(head == 11){
    console.log("You wins");
}
else{
    console.log("You Loose");
}