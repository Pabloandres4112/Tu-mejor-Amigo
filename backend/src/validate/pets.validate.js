import { body } from 'express-validator';

// Definir las reglas de validación
const validarRegistroMascota = [
    body('race_id').notEmpty().withMessage('El campo race_id es requerido').isNumeric().withMessage('El campo race_id debe ser numérico'),
    body('category_id').notEmpty().withMessage('El campo category_id es requerido').isNumeric().withMessage('El campo category_id debe ser numérico'),
    // body('photo').notEmpty().withMessage('El campo photo es requerido').isString().withMessage('El campo photo debe ser una cadena de texto'),
    body('gender_id').notEmpty().withMessage('El campo gender_id es requerido').isNumeric().withMessage('El campo gender_id debe ser numérico'),
    body('user_id').notEmpty().withMessage('El campo user_id es requerido').isNumeric().withMessage('El campo user_id debe ser numérico')
];

export { validarRegistroMascota };
