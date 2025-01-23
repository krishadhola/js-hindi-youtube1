// for of

// ["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(`value of arr is ${num}`)
}

const str="hello world !"
for (const string of str) {
    // console.log(`each word of str is ${string}`);
    
}


// Map   //object is  itertable


const map=new Map()
map.set("IN","india")
map.set("UAE","dubai")
map.set("UAE","dubai")
map.set("USA","united states of america")
// console.log(map);

for (const [keys,value] of map) {
    // console.log(keys ,':', value)
}

const myObject={
    "name1" : "krisha",
    "name2" : "archi",

}
for (const [key,value] of myObject) {
    console.log(key, ':',value);
    
}