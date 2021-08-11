const express = require("express");
const bodyParser = require("body-parser");
const {logger} = require("./lib");
const dictionaryRountes = require("./dictionary-routes");

const app = express();

//middleware
app.use(bodyParser.json());

app.use(logger);

app.use(express.static('./client'));

app.use("/dictionary", dictionaryRountes);
//end of middleware


module.exports = app;