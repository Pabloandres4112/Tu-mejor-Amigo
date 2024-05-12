import { pool } from "../db/conexion.js";

export const Registrogenders = async (req, res) => {
    const { genero } = req.body;

    try {
        const result = await pool.query('INSERT INTO genders (name_gender) VALUES (?)', [genero]);

        if (result.affectedRows > 0) {
            res.status(200).json('Se registró el género');
        } else {
            res.status(400).json('No se pudo registrar el género');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Error interno del servidor');
    }
};
