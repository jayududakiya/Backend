const http = require("http")


const server = http.createServer((request , response )=>{
    response.write("<h1>Hello!!</h1>");
    response.write("<p>this is server 7701 </p>");
    response.end("End of response");
    
})




server.listen(7701,()=>{
    console.log("7701 server is Running.... at http://localhost:7701 ");
})