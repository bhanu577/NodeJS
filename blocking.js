const crypto = require("crypto");
console.log("hello world");

var a = 10;
var b = 20;

crypto.pbkdf2Sync("password","salt",50000000,50,"sha512")
    console.log("key generated in sync way");

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,data)=>{
    console.log("key generated in asyn way");
});

function mutiply(a,b){
    return a*b;
}

var res = mutiply(a,b);
console.log("Multiplication of two number is",res);