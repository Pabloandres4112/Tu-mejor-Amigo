import { Router } from "express";
import { RegistroCategories, ActualizarCategoria, EliminarCategoria, BuscarCategoriaPorId } from "../controller/categories.js";
import { validarRegistroCategories, validarActualizacionCategoria } from "../validate/Categories.validate.js";

const categories = Router();

categories.post('/registrocategories', validarRegistroCategories, RegistroCategories);
categories.put('/actualizarcategories/:id', validarActualizacionCategoria, ActualizarCategoria);
categories.delete('/eliminarcategories/:id', EliminarCategoria);
categories.get('/buscarcategories/:id', BuscarCategoriaPorId);

export default categories;
