const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE=8;
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,data)=>{
    console.log("key-1 generated in asyn way");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,data)=>{
    console.log("key-2 generated in asyn way");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,data)=>{
    console.log("key-3 generated in asyn way");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,data)=>{
    console.log("key-4 generated in asyn way");
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,data)=>{
    console.log("key-5 generated in asyn way");
});