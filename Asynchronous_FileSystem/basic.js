fs=require("fs");
fs.writeFile("t1.txt","Hello",function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Write Completed")
    }
});
console.log("Outside")