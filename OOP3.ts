
class Demo
{
    //charactristics
    No1 : number;
    No2 : number;

    //Default constructur
    constructor()
    {
        console.log("Inside Default Constructor");
        this.No1 = 0;
        this.No2 = 0;
    }

    //Behaviour
    Display()
    {
        console.log("Inside Display Functio Of Demo Class");
    }
}

var obj = new Demo();

obj.Display();
console.log(obj.No1);
console.log(obj.No2);