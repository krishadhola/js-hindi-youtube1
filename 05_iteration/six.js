const coding=["c++","java","python","js","ruby"]

let val =coding.forEach((items)=>{ // for each does not return value
    // console.log(items);
    return items
    
})
// console.log(val);

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const values=myNums.filter((num) => num > 4 )//filter returns value and need to specify condition
// console.log(values);


// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const values=myNums.filter((num) =>{
//            return  num > 4   //if we write condition in scope then return keyword is required
// })

// console.log(values);


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNum=[]
//  myNums.forEach((num)=>{
//     if(num >4)
//     {
//         newNum.push(num)
//     }
//  })
// console.log(newNum);

const myBooks=[
    {
        bookName:"book one",
        published:1989,
        genes:"history"
    },
    {
        bookName:"book two",
        published:1900,
        genes:"economics"
    },
    {
        bookName:"book three",
        published:2000,
        genes:"history"
    },
    {
        bookName:"book four",
        published:2015,
        genes:"maths"
    },
    {
        bookName:"book five",
        published:3000,
        genes:"history"
    },
]

  let userBooks =myBooks.filter((bks) => bks.genes=="history" )
  userBooks =myBooks.filter((bks) => bks.published>="2000" )
  userBooks =myBooks.filter((bks) => { 
    return bks.published>="2000"  && bks.genes=="history"
})
console.log(userBooks);
