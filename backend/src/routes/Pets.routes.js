import { Router } from "express";
import { registrarMascota } from "../controller/Pets.js";

const Pets = Router()

Pets.post('/RegustroPets',registrarMascota)

export default Pets