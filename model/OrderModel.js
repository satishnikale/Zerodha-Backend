import { model } from "mongoose";
import OrderSchema from "../schemas/OrderSchemas"

const OrderModel = new model("orders", OrderSchema);

module.exports = {
    OrderModel
}