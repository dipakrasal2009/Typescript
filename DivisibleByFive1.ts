// Divisible by five or not
function DivisibleByFive(Value1) : boolean{if(Value1 % 5 == 0){return true;}
else{return false;}}
var No1 = 43;var Ret;Ret = DivisibleByFive(No1);
if(Ret == true){console.log(No1+" Number is divisible by five");}
else{ console.log(No1+" number is not divisible by five");} 