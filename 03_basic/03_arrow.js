// if you refer from current content then use this keyword

// const user={

//     userName:"krisha",
//     price :999,
//     welcomeMessage: function()
//     {
//         console.log(`${this.userName},welcome to website`);
        
//     }
// }
// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()


// const chai=function()
// {
//     let userName="krisha"
//     // console.log(this);
    
// }
// chai()
// const chai = () =>
// {
//     let userName ="krisha"
//     // console.log(this);
    
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username :"krisha"})

console.log(addTwo(3,4));