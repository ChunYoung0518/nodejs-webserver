const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
let skiTerms = require("./skiTerms.json");


const app = express();

const save =() =>{
    fs.writeFile("./skiTerms.json", JSON.stringify(skiTerms, null, 2), err => {
        if(err) {
            throw err;
        }
    });
};

//middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    if(Object.keys(req.body).length) {
        console.log(req.body);
    }
    next();
});

app.use(express.static('./client'));
//end of middleware

app.get("/dictionary", (req, res) => {
    res.json(skiTerms);
});

app.post("/dictionary", (req, res) => {
    skiTerms.push(req.body);
    save();
    res.json({
        status:"success",
        term: req.body
    });
});

app.listen(3000, ()=>{
    console.log(`Server directory at http://localhost:3000`);
});

app.delete("/dictionary/:term", (req, res) => {
    skiTerms = skiTerms.filter(def => def.term!== req.params.term);
    save();
    res.json({
        status: "success",
        removed: req.params.term,
        newLength: skiTerms.length
    });
});

