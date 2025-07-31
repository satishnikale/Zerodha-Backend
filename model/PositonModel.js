import model from "mongoose";
import PositionSchema from "../schemas/PositionSchemas";


const PositionModel = new model("positions", PositionSchema);