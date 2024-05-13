import { body } from 'express-validator';

// Definir las reglas de validación
const validarRegistroRace = [
    body('Raza')
        .notEmpty().withMessage('El campo Raza es requerido')
        .isString().withMessage('El campo Raza debe ser una cadena de texto')
        .isLength({ max: 100 }).withMessage('El campo Raza no puede tener más de 100 caracteres')
        .matches(/^[a-zA-Z\s]+$/).withMessage('El campo Raza solo puede contener letras y espacios')
];

export { validarRegistroRace };
