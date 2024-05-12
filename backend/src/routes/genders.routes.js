import { Router } from "express";
import { Registrogenders } from "../controller/genders.js";


const generos = Router();

generos.post('/RegistroGeneros', Registrogenders);

export default generos;
