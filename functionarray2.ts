
// function defination
function Addition(Arr : number[]) : number
{
   var i : number = 0;
   var sum : number = 0;

   for(i=0;i<Arr.length;i++)
   {
      sum = sum + Arr[i];
   }
   return sum;
}

 var Marks : number[]= [77,99,51,79,61];
 var result : number = 0;
 //function call
result = Addition(Marks);
console.log("Addition is : "+result);
