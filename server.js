//modules importations
const express = require("express");
const appRouter = require("./Route/appRouter");
const conn = require("./Config/conn")

const app = express();
const port = 4500;

//Using json format in the req and res
app.use(express.json());
app.use("/api", appRouter);

//Call Database connection
conn();

//Listen to port 4500
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`We are running on.. http://localhost:${port}`);
});
