// Add query string in url at browser and request server to display data. 

var http=require("http");
var url=require("url");

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    var q=url.parse(req.url,true).query;

    var txt=q.year+" "+q.month;

    res.end(txt);
}).listen(3180);