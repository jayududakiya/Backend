const http = require("http")

const img = "https://picsum.photos/200/300"

const server = http.createServer((request , response )=>{
    response.setHeader('Content-Type','text/html')
    response.writeHead(200);
    response.write(`<img src="https://picsum.photos/200/300" alt="hero">`, 'binary');
    response.end(img);
    // response.end(html); // ! this as show error
})




server.listen(7703,()=>{
    console.log("server is Running.... at http://localhost:7703 ");
})