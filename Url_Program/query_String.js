// Add static url in code and request server to display data of query string on browser.

var http=require("http");
var url=require("url");

var addr="http://localhost:8080/default.html?year=2024&month=feb";

http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'});

var q=url.parse(addr,true).query;
//	•	url.parse(addr, true):
//  •	Parses the static URL stored in addr.
//  •	The true flag converts the query parameters into an object.

var txt=q.year +" "+q.month;
res.end(txt);

// Sends the text "2024 feb" as the HTTP response.
// • res.end() indicates that the response is complete.

}).listen(3001)