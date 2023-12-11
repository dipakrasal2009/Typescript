
function Demo() : string[]
{
   var languages : string[] = ["c","java","Python","Typescript"];
   return languages;
}


var Arr : string[];
Arr = Demo();

console.log("Element of arrya are : ");

var i : number = 0;

for(i = 0;i < Arr.length;i++)
{
   console.log(Arr[i]);
}
