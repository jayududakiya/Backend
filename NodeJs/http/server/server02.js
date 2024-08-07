const http = require('http')

const server = http.createServer((request,response)=>{
    response.setHeader('Content-Type', 'application/json')
    response.writeHead(200);
    // response.write("here this is 7702 server start "); // ! this not working with json type
    response.write('{ name : "jayan Dudakiya"}')
    response.end("\n end of response");
})


server.listen(7702,()=>{  console.log('Server running at http://localhost:7702');})