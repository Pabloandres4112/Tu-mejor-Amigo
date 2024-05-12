import { pool } from "../db/conexion.js";

export const RegistroCategories = async (req, res) => {
    const { categoria } = req.body;

    try {
        const result = await pool.query('INSERT INTO categories (name_category) VALUE (?)', [categoria]);

        if (result.affectedRows > 0) {
            res.status(200).json('Se registró la categoría');
        } else {
            res.status(400).json('No se pudo registrar la categoría');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Error interno del servidor');
    }
};
