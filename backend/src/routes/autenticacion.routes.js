import { Router } from "express";
import { validar } from "../controller/Autenticar.js";

const validacionLogin = Router()

validacionLogin.post('/Login',validar)


export default validacionLogin