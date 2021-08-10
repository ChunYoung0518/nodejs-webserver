const { createServer } = require("http");
const { createReadStream } = require("fs");
const { decode } = require("querystring");

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type": type});
    createReadStream(filePath).pipe(res);
}

createServer((req, res) => {

    if(req.method === "POST") {
        let body = "";
        req.on("data", data => {
            body += data;
        });

        req.on("end", () => {
            const{name, email, message} = decode(body);
            console.log(`${name}(${email}): ${message}`);
        })
    }

    switch(req.url) {
        case "/": return sendFile(res, 200, "text/html", "./files/home-page.html");
        case "/files/code.png": return sendFile(res, 200, "image/png", "./files/code.png");
        case "/styles.css": return sendFile(res, 200, "text/css", "./files/styles.css");
        case "/contact": return sendFile(res, 200, "text/html", "./files/contact.html");
        default: return sendFile(res, 200, "text/html", "./files/404.html");
    }
}).listen(3000);

console.log("Dniale's server running and listening on port 3000");