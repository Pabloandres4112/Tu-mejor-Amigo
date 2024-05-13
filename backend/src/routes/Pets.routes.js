import { Router } from "express";

import { validarRegistroMascota, validarActualizacionMascota } from "../validate/pets.validate.js";
import { buscarMascota, editarMascota, eliminarMascota, registrarMascota } from "../controller/Pets.js";

const Pets = Router();
Pets.post('/RegustroPets', validarRegistroMascota,registrarMascota);
Pets.put('/ActualizarPets/:id', validarActualizacionMascota, editarMascota);
Pets.delete('/EliminarPets/:id', eliminarMascota);
Pets.get('/BuscarPets/:id', buscarMascota);

export default Pets;
