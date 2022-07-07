import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
import { Connection } from "./Database/db.js";
import Router from "./routes/route.js";

const port = 9000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

Connection();
