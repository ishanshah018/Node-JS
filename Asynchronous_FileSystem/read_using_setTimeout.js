// write and append file using asynchronous fs method
//Read File using setTimeout function after 2s

fs=require("fs");
fs.writeFile("t3.txt","Hello ",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        fs.appendFile("t3.txt"," Read Using Timeout", (err)=>
        {
            if(err)
            {
                console.log(err);
            }
        })
    }
})

var rfile=function()
{
    setTimeout(function()
{
    fs.readFile("t3.txt","utf-8",(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(data);
        }
    })
},2000)
}

rfile()