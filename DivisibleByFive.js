// Divisible by five or not
function DivisibleByFive(Value1) {
    if (Value1 % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var No1 = 55;
var Ret;
Ret = DivisibleByFive(No1);
if (Ret == true) {
    console.log("Number is divisible by five");
}
else {
    console.log("number is not divisible by five");
}
