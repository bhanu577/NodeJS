//import { multiplyInt } from "./mutiply.js";
const { multiplyInt, calculateSum } = require("./calculation")
const data = require("./data.json");
var name = "Welcome to Java Script";

var a = 10;
var b = 30;
x = 200;
var res = calculateSum(a, b);
var res1 = multiplyInt(a, b)

console.log(res)
console.log(x)
console.log(name);
console.log(res1);
console.log(data)