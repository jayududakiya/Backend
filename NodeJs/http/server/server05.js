const  http = require('http');

const host_name = "localhost";
const port_number = 7705;

const server = http.createServer(function (request, response) {
    response.setHeader("dummy","dummy Value");
    response.setHeader('Content-Type', 'text/HTML')
    response.writeHead(200);
    response.write(`<h1>Hello Node server is ${port_number} </h1>\n`);
    response.write(`<img src="https://picsum.photos/seed/picsum/200/300" alt="demo"  /> <br>`);
  response.end("response end with HTML");
}).listen(port_number,()=>{
    console.log(`Server running at http://${host_name}:${port_number}`);
});


// close server 
setTimeout(() => {
    server.close(()=>{console.log("server was close");})
},6000);


/* ----------------------------------- // ? other server ----------------------------------- */

const port_numberOT = 7700;

const serverOT = http.createServer(function (request, response) {
    response.setHeader("dummy","dummy Value");
    response.setHeader('Content-Type', 'text/HTML')
    response.writeHead(200);
    response.write(`<h1>Hello Node server is ${port_numberOT} </h1>\n`);
    response.write(`<h1>close server is ${port_numberOT} </h1>\n`);
    response.write(`<img src="https://picsum.photos/seed/picsum/200/300" alt="demo" /> <br>`);
  response.end("response end with HTML");
}).listen(port_numberOT,()=>{
    console.log(`Server running at http://${host_name}:${port_numberOT}`);
});

// function closeServerOT () {
//     return serverOT.close(()=>{console.log("serverOT was close");})
//  }

// close server 
setTimeout(() => {
    return serverOT.close(()=>{console.log("serverOT was close");})
},9000);