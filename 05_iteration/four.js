// for In
//  it takein for in loop key=key myObject[key]=value
const myObject={
    js : "javascript",
    cpp:'c++',
    rb :'ruby'
}
for (const key in myObject) {
    // console.log(` ${key} short from of  ${myObject[key]}`);
    
}


// when map is not itrable in for In loop

const map=new Map()
map.set("IN","india")
map.set("UAE","dubai")
map.set("UAE","dubai")
map.set("USA","united states of america")
for (const key in map) {
    console.log(key);
    
}