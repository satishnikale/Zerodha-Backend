const { model } = require("mongoose");

const { OrderSchema } = require("../schemas/OrderSchema");

const OrderModel = new model("holding", OrderSchema);

module.exports = { OrderModel };