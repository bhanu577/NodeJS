const fs = require("fs");
const https = require("https");
console.log("Hello world");

var a = 10;
var b = 20;

https.get("https:/dummyjson.com/products/1",(dyen)=>{
    console.log("Data is fetched from the API call");
})

setTimeout(()=>{
    console.log("wait for 5 sec");
},5000);

fs.readFile("./data.txt","utf8",(err,data) =>{
    console.log(data);
})

function mutiply(a,b){
    return a*b;
}

var res = mutiply(a,b);
console.log("Multiplication of two number is",res);