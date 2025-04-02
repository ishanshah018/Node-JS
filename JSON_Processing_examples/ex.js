// Write node JS script to write an array of objects with properties name and age in a
// file named student.txt. Then read the file and display the object on console

const student =
[
    {
        name: "ABC",
        age: 30
    },
    {
        name: "XYZ",
        age: 32
    }
]

var ps=require("fs");

ps.writeFileSync("student.txt",JSON.stringify(student));
data=ps.readFileSync("student.txt","utf-8");
b=JSON.parse(data); 
console.log(b);