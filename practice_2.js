// Write a node.js script to copy contents of one file to another file. Data
// should be fetched from Source.txt and insert to destination.txt.

var fs=require("fs");
fs.writeFileSync("source.txt","Hello This is txt File ");
data=fs.readFileSync("source.txt","utf-8");

fs.writeFileSync("destination.txt",data);

data1=fs.readFileSync("destination.txt","utf-8");
console.log(data1);
