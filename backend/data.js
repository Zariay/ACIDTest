// JavaScript source code
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema(
    {
        x: Number,
        y: Number,
        z: Number,
        r: Number,
        g: Number,
        b: Number
    },
    { collection: "cube" }
);

module.exports = mongoose.model("data", data);