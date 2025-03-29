var http=require("http");
http.createServer(function(req,res){
    res.write(req.url);
    res.end("Url fetched");
}).listen(3130);