import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/Users.js";
import swaggerUi from "swagger-ui-express";
import swaggerspect from "./swagger.js";
import connectdb from "./config/database.js";

connectdb();



const app = express();



app.use(express.json());

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerspect));

app.use("/usuarios", userRoutes);

app.get("/api", (req, res) => {
  res.send("API funcionando correctamente");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});