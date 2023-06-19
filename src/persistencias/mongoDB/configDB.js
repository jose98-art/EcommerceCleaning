import mongoose from "mongoose";
import config from "../../config.js";

const uri = config.uri

try {
    mongoose.connect(uri)
    console.log("Connection to DB successful")
} catch (error) {
    console.log(error)
}