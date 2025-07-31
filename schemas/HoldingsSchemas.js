import Schema, { model }  from "mongoose";

const HodingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String
});

module.exports = {
    HodingsSchema
}