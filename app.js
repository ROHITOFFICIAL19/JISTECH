const http=require('http');
const fs=require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    const html=fs.readFileSync('./groupA.html');
    res.end(html);
}).listen(8000,()=>{
    console.log("running on 3000");
});