import { Schema } from "mongoose";

const PostionSchema = new Schema({
    pruduct: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean 
});

module.exports = {
    PostionSchema
}