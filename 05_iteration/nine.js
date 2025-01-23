const myNums=[1,2,3]

// const Total=myNums.reduce(function (acc,currval) {
//     console.log(`${acc}  and ${currval} `);
    
//     return acc + currval
// },0)
// console.log(Total);

const Total=myNums.reduce((acc,currval) => (acc + currval) ,0 )
//  console.log(Total);

const myShoppingCart=[
    {
        course : "js course",
        price : 4000
    },
    {
        course : "py course",
        price : 6000
    },
    {
        course : "mob dev course",
        price : 9999
    },
    {
        course : "data science course",
        price : 12000
    },
]

 const totalToPay=myShoppingCart.reduce(( acc,item) => +acc +item.price ,0)
 console.log( totalToPay);
 