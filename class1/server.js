
// How Node js differ from vanilla js
//   1)Node run on server side not in a browser(backend not frontend);

//  2)the console is the windows terminal ;
// console.log("hello world");
// 3) global object instead of windows object;
// console.log(global);

// 4) Has common core modules that we will explore;
// 5) commonJs modules instead of ES6 modules
// 6) Missing some js API like fetch;

const os = require("os")
const path= require("path")
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

const {add,subtract,multiply,divide} = require("./math");

console.log(add(2,3))
console.log(subtract(2,3))
console.log(multiply(2,3))
console.log(divide(2,3))
