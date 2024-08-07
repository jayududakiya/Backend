// ! HTTP = Hyper Text Transfer Protocol 
// ! HTTPS = Hyper Text Transfer Protocol Secure
// ! HTTP Secure (HTTPS)

const  http = require('http');

const server = http.createServer(function (request, response) {
  response.setHeader("dummy","dummy Value");
  response.setHeader('Content-Type', 'text/HTML')
  response.writeHead(200);
  response.write('<h1>Hello Node!!!!</h1>\n');
  response.end("end Of Response");
})

server.listen(6601,()=>{
    console.log('Server running at http://localhost:6601 , http://127.0.0.1:6601');
});


// for close server 
setTimeout(() => {
  console.log("server is closing....");
  return server.close(()=>{console.log("OFF server 6601");})
},5000);
