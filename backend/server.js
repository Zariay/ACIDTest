// JavaScript source code
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const cors = require("cors");

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

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

//this is our add method
//add method to add data into database
router.post ("/putData", (req, res) => {
    let data = new Data(req.body);

    data.save()
    .then(data => {
        res.json('Values added successfully');
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("unable to save to database");
    });
});

app.use("/api", router);
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.listen(API_PORT, () => console.log('Listening on port ${API_PORT}'));