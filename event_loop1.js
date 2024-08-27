const fs = require("fs");
const a = 100;

setImmediate(()=> console.log("I am set immdediate"));

fs.readFile("./data.txt","utf-8",()=>{
    console.log("file is been read");
});

setTimeout(()=>{
    console.log("timer expired");
},0);

function printA(){
    console.log(a);
}
printA();
console.log("I am the last line in the JS file");
