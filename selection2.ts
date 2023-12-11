
function CheckEven(No : number)  : boolean
{

    if(No % 2 ==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var value : number = 10;
var result : boolean;

result = CheckEven(value);
if(result == true)
{
    console.log("It is even number");
}
else
{
    console.log("It is odd number");
}