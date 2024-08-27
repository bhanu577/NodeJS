const fs = require("fs");
const a = 100;

setImmediate(() => console.log("I am set immdediate"));

Promise.resolve("promise").then(console.log);

fs.readFile("./data.txt", "utf-8", () => {
  setImmediate(() => console.log("I am 2nd set immdediate"));

  process.nextTick(() => {
    console.log("Inside 2nd process of next tick");
  });

  setTimeout(() => {
    console.log("timer 2nd expired");
  }, 0);

  console.log("file is been read");
});

setTimeout(() => {
  console.log("timer expired");
}, 0);

process.nextTick(() => {
  console.log("Inside process of next tick");
});

function printA() {
  console.log(a);
}
printA();
console.log("I am the last line in the JS file");


// 100
// I am the last line in the JS file
// Inside process of next tick
// promise
// timer expired
// I am set immdediate
// file is been read
// Inside 2nd process of next tick
// I am 2nd set immdediate
// timer 2nd expired