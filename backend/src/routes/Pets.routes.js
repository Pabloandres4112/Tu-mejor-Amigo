import { Router } from "express";
import { registrarMascota } from "../controller/Pets.js";
import { validarRegistroMascota } from "../validate/pets.validate.js";

const Pets = Router()

Pets.post('/RegustroPets',validarRegistroMascota,registrarMascota)

export default Pets