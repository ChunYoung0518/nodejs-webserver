const http = require("http");

//response with plain text
// http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("hello world");
// }).listen(3000);


//response with html
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello world!</h1>
            <p>method: ${req.method}</p>
            <p>url: ${req.url}<p>
        </body>
        </html>
    `);
}).listen(3000);

console.log("Server is listening on port 3000");