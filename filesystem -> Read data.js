var fs=require("fs");

fs.mkdirSync("node");  // Creates node directory in current folder

fs.writeFileSync("node/write.txt","Hello how are you ");

// var x=fs.readFileSync("node/write.txt");
// console.log(x); // would get the data in text format,i.e., string data type but it returns a buffer object.

// console.log(x.toString()); // now we will get file data on console

//or

var x=fs.readFileSync("node/write.txt","utf-8");
console.log(x);
