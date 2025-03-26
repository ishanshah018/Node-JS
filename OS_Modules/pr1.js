// Write node.js script to create a folder named “AA” in temp folder. Also, create file
// named “temp.txt” inside “AA” folder. Now, check if available physical memory of the 
// system is greater than 1 GB then write “Sufficient Memory” in the file, else write
// “Insufficient” in file

var os=require("os");
var fs=require("fs");

temp=os.tmpdir()

fs.mkdirSync(temp+"/AA")

mem=os.freemem()/1024/1024/1024

if(mem>1)
{
    fs.writeFileSync(temp+"/AA/temp.txt","Sufficient Memory");
}
else
{
    fs.writeFileSync(temp+"/AA/temp.txt","Insufficient Memory");
}