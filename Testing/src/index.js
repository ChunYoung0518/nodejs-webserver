import app from "./app";
require("dotenv").config();

if(process.env.NODE_ENV === "development") {
    console.log("development environment");
} else {
    console.log("no environment variable set");
}

console.log(process.env.DATABASE);

app.listen(3000, ()=>{
    console.log(`Server directory at http://localhost:3000`);
});
