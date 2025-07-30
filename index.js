import express from "express";
import mongoose from "mongoose";
import { MONGO_URL, PORT } from "./config.js";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "App is running..."
    })
})



async function main(){
    app.listen(PORT);
    await mongoose.connect(MONGO_URL);
    console.log(`DB connected`);
    console.log(`App is listening on PORT ${PORT}`);
}
main();