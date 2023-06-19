// El modelo solo debe ser requerido por el dao
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  fullName:{
    type:String
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    default: 0,
  },
  password: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
  }
  // ,
  // cart: {
  //   type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "carts" }],
  // },
  // role: {
  //   type: String,
  //   default: "user",
  // },
});

export const userModel = mongoose.model("Users", usersSchema);
