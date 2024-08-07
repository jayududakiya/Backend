const http = require("http")

const host_name = "localhost";
const port_number = 7704;

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/HTML')
    res.statusCode = 200 ; // * OK
    // res.statusCode = 404 ; // * this for NOT Found
    // res.statusCode = 300 ; // * with error | pending
    res.write(`<h1> this is server ${port_number}</h1>`)
    res.write(`<script>
        let num = 0
        const ID = setInterval(() => {
            console.log(num)
            num += 1
        }, 1000);
        setTimeout(() => {
            alert("hello this javascript")
            clearInterval(ID)
        }, 10000);
        </script>`)
    res.end("this is end")
}).listen(port_number , ()=>{
    console.log(`this is server is running  at http://${host_name}:${port_number}`);
})

