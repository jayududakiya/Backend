// ! URL = Uniform Resource Location
// ! URI = Uniform Resource Identifier
// ! URN = Uniform Resource Name

const http = require('http')

const server = http.createServer();

const shopData = [
    {
        _id : 101,
        categories : "Electronics",
        productCount : 21
    },
    {
        _id : 102,
        categories : "kitchens",
        productCount : 10
    },
    {
        _id : 103,
        categories : "kids",
        productCount : 5
    }
]

server.on('request',(req,res)=>{
    console.log("X",req);
    console.log(req.url);
    // this is return string value 
    let urlLink = req.url.split("/")
    console.log(urlLink);
    switch (urlLink[1]) {
        case "home":{
            res.setHeader("Content-type" , "text/html")
            res.write(`<h4> welcome To The ${urlLink[1]} Page </h4>`)
            res.end()
        }
        break;
        case "about":{
            res.setHeader("Content-type" , "text/html")
            res.write(`<h4> welcome To The ${urlLink[1]} Page </h4>`)
            res.end()
        }
        break;
        case "shop":{
            if(urlLink.length === 3){
                //! why
                // if(urlLink[2] == 101){
                //     res.end(JSON.stringify(shopData[0]))
                // }
                // else if(urlLink[2] == 102){
                //     res.end(JSON.stringify(shopData[1]))
                // }
                // else if(urlLink[2] == 103){
                //     res.end(JSON.stringify(shopData[2]))
                // }
                //! why
                let findID = +urlLink[2];
                // res.end(
                //     JSON.stringify(shopData.find(X => {
                //         return X._id === findID                        
                //     }))
                // )
                //! why
                res.end(
                    JSON.stringify(shopData[shopData.findIndex(X => {
                        return X._id === findID                        
                })])
                )
            }else{
                res.setHeader("Content-type" , "application/json")
                res.end(JSON.stringify(shopData))
            }
        }
        break;
        default: {
            res.setHeader("content-type" , "text/html")
            res.setHeader("content-type" , "application/json")
            res.write(`<h4> welcome To The Main Page </h4>`)
        }
        break;
    }
})

server.listen(8000,()=>{
    console.log("server is ruing at http://localhost/8000 , http://127.0.0.1:8000");
    
})
