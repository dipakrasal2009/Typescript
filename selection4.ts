
function DisplayTime(Division : string) : void
{
  switch(Division)
  {
    case "A":
    {
      console.log("your exam is at 7 AM");
      break;
    }

    case "B":
      {
        console.log("your exam is at 8 AM");
        break;
      }
    case "C":
      {
        console.log("your exam is at 9 AM");
        break;
      }
    case "D":
      {
        console.log("your exam is at 10 AM");
        break;
      }
    default:
      {
        console.log("wrong input , it should be ithear A,B,C,D");
      }
  }
}

var Value : string ="C";
DisplayTime(Value);