import express from "express";
import bodyParser from "body-parser";
import {logger} from "./lib";
import dictionaryRountes from "./dictionary-routes";

const app = express();

//middleware
app.use(bodyParser.json());

app.use(logger);

app.use(express.static('./client'));

app.use("/dictionary", dictionaryRountes);
//end of middleware


// module.exports = app;
export default app;