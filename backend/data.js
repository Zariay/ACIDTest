// JavaScript source code
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
    	id: Number,
        x: Number,
        y: Number,
        z: Number,
        r: Number,
        g: Number,
        b: Number
    },
    { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);