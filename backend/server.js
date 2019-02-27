// JavaScript source code
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

//MongoDB database
const dbRoute = "mongodb+srv://testuser:testuserpw@alexcluster-alfjn.mongodb.net/test?retryWrites=true";

mongoose.connect(
    dbRoute,  
    { useNewUrlParser:true }
);

let db = mongoose.connection;

db.once("open", () => console.log("Connected to database"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

//add method to add data into database
router.post ("/putData", (req, res) => {
    let data = new Data();

    const {x, y, z, r, g, b } = req.body;

    data.b = b;
    data.g = g;
    data.r = r;
    data.z = z;
    data.y = y;
    data.x = x;
    data.save(err => {
        if (err) return res.json({ success: false, error: err});
        return res.json({success: true});
    });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log('Listening on port ${API_PORT}'));