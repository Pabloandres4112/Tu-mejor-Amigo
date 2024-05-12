import { pool } from "../db/conexion.js";

export const RegistroRace = async (req, res) => {
    const { Raza } = req.body;

    try {
        const result = await pool.query('INSERT INTO races (name_race) VALUES (?)', [Raza]);

        if (result.affectedRows > 0) {
            res.status(200).json('Se registró la raza');
        } else {
            res.status(400).json('No se pudo registrar la raza');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Error interno del servidor');
    }
};
