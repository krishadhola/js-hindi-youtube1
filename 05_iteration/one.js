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
    //  console.log(`outer value is ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`inner value is ${j} and outer value is ${i}`);
        
        // console.log( i + '*' + j + '='  + i*j );
        
    }
    
    
}
 const myArray=["sam","krisha","vishal"]
//  console.log(myArray.length);
 
for (let index = 0; index <myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

// break and continue

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`5 is detected`);
        continue
        
    }
    console.log(index);
    

    
}
for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`5 is detected`);
        break
        
    }
    console.log(index);
    

    
}