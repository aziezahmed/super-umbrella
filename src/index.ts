import express from "express";
import cron from "node-cron";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8080; // default port to listen
const uri = process.env.MONGODB_URI;

// define a route handler for the default home page
app.get("/", (req, res) => {
    console.info(uri);
    res.send("Hello world!");
});

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});