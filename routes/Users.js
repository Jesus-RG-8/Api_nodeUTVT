import express from "express";
import {
  crearUsuario,
  obtenerUsuarios
} from "../controllers/Users_controller.js";

const route = express.Router();

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
route.get("/", obtenerUsuarios);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un usuario
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
route.post("/", crearUsuario);

export default route;