// Write a nodejs script to print query string of url in file using ES6 callback. (Async File System).

// Using u.parse(false)

var u=require("url");
var ps=require("fs");
var adr1=" http://localhost:8080/default.html?year=2025&month=feb";

var q1=u.parse(adr1,false);
var qdata=q1.query;

ps.writeFile("fsd2.txt",qdata,(err)=>
{
    console.log("completed");
});