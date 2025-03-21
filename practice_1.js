var fs=require("fs");
fs.writeFileSync("s1.txt","50 -1 99 100 20 0 56 78 59");
data=fs.readFileSync("s1.txt","utf-8");
data=data.split(" ");
d=data.sort((a,b)=>a-b);
console.log(d);
