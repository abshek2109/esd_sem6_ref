console.log("http module test...");
const http = require("http");

http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    res.writeHead(200, {'Content-Type': 'text/html'})
    // res.writeHead(200, {'Content-Type': 'application/json'})
    /**
     * / :- welcome to home
     * /student :- this is student listing
     * /teacher :- this is teacher listing
     */
    if(req.url == "/")
        res.write("welcome to home");
        
    else if(req.url == "/student")
        res.write("this is student listing");
    
    else if(req.url == "/teacher")
        res.write("this is teacher listing");

    else {
        res.write("Page not found...");
    }

    res.end("Bye...")
}).listen(8989, () => {
    console.log("Listening at port 8989...");
});