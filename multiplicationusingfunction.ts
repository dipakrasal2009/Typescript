// multiplicatio of two numbers using function

function Multiplication(Value1,Value2) : number
{
    var Result;

    Result = Value1*Value2;

    return Result;
}

var No1 : number = 11;
var No2 : number = 10;
var Ans : number = 0;

Ans = Multiplication(No1,No2);

console.log("Multiplication is : "+Ans);