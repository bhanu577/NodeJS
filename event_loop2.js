const fs = require("fs");
const a = 100;

setImmediate(()=> console.log("I am set immdediate"));

Promise.resolve("promise").then(console.log);

fs.readFile("./data.txt","utf-8",()=>{
    console.log("file is been read");
});

setTimeout(()=>{
    console.log("timer expired");
},0);

process.nextTick(()=>{
    console.log("Inside process of next tick");
});

function printA(){
    console.log(a);
}
printA();
console.log("I am the last line in the JS file");



// output
//100
//I am the last line in the JS file
//"Inside process of next tick"
//Inside Promise function
//timer expired
//I am set immdediate
// file read