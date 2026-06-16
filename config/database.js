import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conectdb = async () => {
    try {
        console
        await mongoose.connect(process.env.MONGODB_URI).then(() =>
        console.log("Conexión a la base de datos establecida"))
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }

}


export default conectdb;