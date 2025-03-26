// Write node.js script to create a folder named “AA” at temp folder. Also, create file
// named “temp1.txt” inside “AA” folder. Now, check platform is “win32” or not and
// print message accordingly in file.

var fs=require("fs");
var os=require("os");

f = os.tmpdir();
p = os.platform();

if(p == "win32")
{
    fs.writeFileSync(f+"/AA/temp1.txt","You are working on windows 32 bit")
}
else
{
    fs.writeFileSync(f+"/AA/temp.txt","You are working on windows 64 bit")
}