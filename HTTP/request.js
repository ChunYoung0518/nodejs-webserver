const https = require("https");
const fs = require("fs");

//https request with options
// const options = {
//     hostname: "en.wikipedia.org",
//     port: 443,
//     path: "/wiki/Node.js",
//     method: "GET"
// }

// const request = https.request(options, res => {

//     let responseBody = "";
//     res.setEncoding("utf-8");

//     res.on("data", data => {
//         console.log("-----chunk-------", data.length);
//         responseBody += data;
//     })

//     res.on("end", () => {
//         fs.writeFile("./nodejs.html", responseBody, err => {
//             if(err) {
//                 throw err;
//             }
//             console.log("file downloaded!");
//         })
//     })
// });

//https get method
const request = https.get("https://en.wikipedia.org/wiki/Node.js", res => {

    let download = fs.createWriteStream("./nodejs.html");
    res.pipe(download);

    res.on("end", () => {
        console.log("Get Finished: nodejs page has been downloaded")
    })

});

request.end();