const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/getSecretData"){
        res.end("No Secret Data Found");
    }
    else{
            res.end("helloworld!")
    }
});
server.listen(7777);