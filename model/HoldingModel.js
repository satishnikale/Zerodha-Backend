import model  from "mongoose";
import HodingsSchema from "../schemas/HoldingsSchemas";

const HoldingModel = new model("holdings", HodingsSchema);


module.exports = {
    HoldingModel
}