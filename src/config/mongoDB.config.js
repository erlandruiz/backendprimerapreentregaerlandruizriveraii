
import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    mongoose.connect("Colocar aqui la direccion de monggo")
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}