

function myName()
{
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}
// myName()

// function NumAdd(Number1,Number2)
// {
//     console.log(Number1+Number2);
    
// }
// NumAdd(3,4)

function NumAdd(Number1,Number2)
 {
//         let result= Number1+Number2
//         return result             //any statement not processed after return keyword
            
//or

            return Number1 + Number2 
}

  const result=NumAdd(3,5)
  // console.log("result",result);
  

  function LoggedInUser(UserName = "sam")
  {
    // if(UserName==undefined | !UserName) 
    // {
    //   console.log("please enter username");
      
    // }
      return `${UserName} is just logged in`
  }
  // console.log(LoggedInUser("krisha"));
  // console.log(LoggedInUser());  // it return undefined if argument is not passed

  function calculateCartItem( val1, val2, ...num1)  // ...(rest operator) collect all argument or values
  {
    return num1
  }
  // console.log(calculateCartItem(200,400,300,500));


  // **************************how the object is passed through function and use it ********************************

  const user=
  {
    // username : "hitesh",
    // prices : 9999
  }

  function handleUser(anyObject)
  {
    // console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
    
  }
  handleUser({
    
    username : "hitesh",
    prices : 9999
  })

//with array

const myArray=[200,700,500,900]

function returnSecondValue(getArray)
{
   return getArray[2]
}
console.log(returnSecondValue(myArray));