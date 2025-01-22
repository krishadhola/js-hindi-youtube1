//for

// for (let i = 0; i <=10; i++) {
//     const element = i
//     if(element == 5)
//     {
//         // console.log("5 is best value");
        
//     }
//     // console.log(element);
    
// }

for (let i = 1; i <=10; i++) {
     console.log(`outer value is ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner value is ${j} and outer value is ${i}`);
        
        console.log( i + '*' + j + '='  + i*j );
        
    }
    
    
}