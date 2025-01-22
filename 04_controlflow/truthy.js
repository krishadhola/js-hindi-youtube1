// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// nullish colescing  ??: operatior :null undefined

let val1;
// val1= 5 ?? 10
// val1 = null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 5

// console.log(val1);

//ternary operator

// condition ? true : false

const iceTeaPrice=500
iceTeaPrice >=400 ? console.log("more than ") : console.log("less than");


