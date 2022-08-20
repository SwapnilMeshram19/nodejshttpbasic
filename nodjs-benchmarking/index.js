const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    if (req.url === "/textsync") {
        return res.end(fs.readFileSync("data.txt"));
    }

    if (req.url === "/textasync") {
        fs.readFile('data.txt',(err,data)=>{
            if(!err){
                return res.end(data);
            }else{
                return res.end(err);
            }
        })
    }

    if (req.url === "/textstream") {
        const readStream=fs.createReadStream("data.txt");
        readStream.on('open',()=>{
           return readStream.pipe(res);
        })
        readStream.on('error',(err)=>{
            res.end(err)
        })
    }

    if(req.url==="/textpromise"){
        fs.promises.readFile("data.txt")
        .then((data)=>{return res.end(data)})
        .catch((error)=>{return res.end(error)})
    }
});
server.listen(8080);