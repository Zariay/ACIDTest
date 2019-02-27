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


//get method to obtain all data in database
router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err});
        return res.json({success: true, data:data });
    });
});

//update method to overwrite existing data in database
router.post("/updateData", (req, res) => {
    const { id, update } = req.body;
    Data.findOneAndUpdate(id, update, err => {
        if (err) return res.json({ success: false, error: err});
        return res.json({success: true, data:data });
    });
});

//delete method to remove existing data in database
router.post ("/putData", (req, res) => {
    let data = new Data();

    const { id, message } = req.body;
    
    if((!id && id !=0) || !message) {
        return res.json({
            success: false,
            error: "Invalid inputs"
        });
    }
    data.message = message;
    data.id = id;
    data.save(err=> {
        if (err) return res.json({ success: false, error: err});
        return res.json({success: true, data:data });
    });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log("Listening on port ${API_PORT}"));