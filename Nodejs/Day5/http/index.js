import http from "http"



// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-type" : "text/plain"})
//     res.end("Hello world")
// })


const server = http.createServer((req, res) => {
    if(req.url == "/")
    {
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end("<h1>Hello world</h1>")
    }
    else if(req.url == '/about')
    {
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end("<h1>my name is gabbar</h1>")
    }
    else if(req.url == '/home')
    {
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end("<h1>mera koi thikana nhi hai</h1>")
    }
    else
    {
        res.writeHead(200, {"Content-type" : "text/html"})
        res.end("<h1>No routes matched</h1>")
    }
})


// const server = http.createServer((req, res) => {
//     if(req.method == "GET")
//     {
//         res.writeHead(200, {"Content-type" : "text/plain"})
//         res.end("This is a Get request")
//     }
//     else if(req.method == "POST")
//     {
//         res.writeHead(200, {"Content-type" : "text/plain"})
//         res.end("This is a Post request") 
//     }
//     else if(req.method == "PUT")
//     {
//         res.writeHead(200, {"Content-type" : "text/plain"})
//         res.end("This is a Put request") 
//     }
//     else if(req.method == "PATCH")
//     {
//         res.writeHead(200, {"Content-type" : "text/plain"})
//         res.end("This is a Patch request") 
//     }
//     else if(req.method == "DELETE")
//     {
//         res.writeHead(200, {"Content-type" : "text/plain"})
//         res.end("This is a Delete request") 
//     }
// })



server.listen(3000, () => {
   console.log( "Server running on port 3000")
})
