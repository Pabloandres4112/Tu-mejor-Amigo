import { Router } from "express";
import { Registrogenders, BuscarGenero, ActualizarGenero, EliminarGenero } from "../controller/genders.js";
import { validarGeneroActualizar, validarGeneroRegistro } from "../validate/genders.validate.js";

const generos = Router();

generos.post('/registroGenero', validarGeneroRegistro, Registrogenders);
generos.get('/BuscarGenero/:id', BuscarGenero);
generos.put('ActualizarGenero/:id',validarGeneroActualizar, ActualizarGenero);
generos.delete('/eliminarGenero/:id', EliminarGenero);

export default generos;
