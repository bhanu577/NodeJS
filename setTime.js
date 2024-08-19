const crypto = require("crypto");
console.log("hello world");

var a = 10;
var b = 20;

setTimeout(()=>{
    console.log("call me asap");
},0);

setTimeout(()=>{
    console.log("call me 3sec");
},3000);

function mutiply(a,b){
    return a*b;
}

var res = mutiply(a,b);
console.log("Multiplication of two number is",res);