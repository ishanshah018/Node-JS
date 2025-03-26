// Write node.js script to check whether the file extension is .txt or not.

var pm=require("path");
path=pm.parse("/Users/name/JS-Javascript/prac1.js");

if(path.ext==".txt")
{
    console.log("Text Document");
}
else
{
    console.log("Not a Text Document");
}