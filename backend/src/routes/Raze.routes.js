import { Router } from "express";
import { RegistroRace } from "../controller/races.js";
import { validarRegistroRace } from "../validate/races.validate.js";


const razas = Router();

razas.post('/RegistroRazas', validarRegistroRace,RegistroRace);

export default razas;
