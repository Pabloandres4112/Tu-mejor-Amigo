import { Router } from "express";
import { RegistroRace } from "../controller/races.js";


const razas = Router();

razas.post('/RegistroRazas', RegistroRace);

export default razas;
