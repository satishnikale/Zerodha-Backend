const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrderSchema");

const OrderModel = new model("orders", OrdersSchema);

module.exports = { OrderModel };