// Write a nodejs script to print query string of url in file using ES6 callback. (Async File System).

// Using u.parse(true)

var url=require("url");
var fs=require("fs");

var addr=" http://localhost:8080/default.html?year=2025&month=feb";

var u1=url.parse(addr,true);
var data=JSON.stringify(u1.query);


fs.writeFile("fsd2.txt",data,(err)=>
    {
    console.log("completed");
    });