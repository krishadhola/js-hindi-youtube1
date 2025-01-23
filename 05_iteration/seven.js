// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNum=myNums.map((num)=> num +10 )
// console.log(newNum);


const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNums.forEach((num)=> /// there is no need of return bcz foreach not return any value
    {
       let val= num + 10 
        // console.log(val);
   })


const NUM=myNums
            .map((num) => num * 10)
            .map((num) => num + 1 )
            // .filter((num) => num>=30 )

console.log(NUM);
