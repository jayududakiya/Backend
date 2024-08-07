const fs = require("fs")
const http = require("http")
const url = require('url');

const Port = 8000;
const hostname = '127.0.0.1:'

const server = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    
    // let baseUrl = req.url.split("/"); // ! not require Now

    let log = `# Date : ${new Date().toLocaleTimeString()} ${req.url} => New Request Acquired \n `;

    const myUrl = url.parse(req.url,true)

    console.log(myUrl);

    fs.appendFile('./log.md',log,(error,response)=>{
        if(error){
            console.log(error);
        }else{
            switch(myUrl.pathname){
                case "/home" : {
                    res.setHeader("Content-Type","text/html")
                    res.write(`<h1>This Is ${myUrl.pathname} </h1>`)
                    res.end()
                }
                break;
                case "/about" :{
                    res.setHeader("Content-type","text/html")
                    res.write(`<h1>This Is ${myUrl.pathname} </h1>`)
                    res.end()
                }
                break;
                case "/user" :{
                    res.setHeader("Content-type","text/html")
                    res.write(`<h1>This Is ${myUrl.pathname} </h1>`)
                    res.end()
                }
                break;
                default : {
                    res.end("<h1>404 ERROR!</h1>")
                }
                break;
            }
        }
    })
}).listen(Port,()=>{
    console.log(`Server is Running At http://${hostname}${Port}`);
})