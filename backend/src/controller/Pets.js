import { pool } from '../db/conexion.js';

export const registrarMascota = async (req, res) => {
    const { race_id, category_id, photo, gender_id, user_id } = req.body;

    try {
        const sql = 'INSERT INTO pets (race_id, category_id, photo, gender_id, user_id) VALUES (?, ?, ?, ?, ?)';
        const [result] = await pool.query(sql, [race_id, category_id, photo, gender_id, user_id]);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Mascota registrada correctamente' });
        } else {
            res.status(500).json({ message: 'Error al registrar la mascota' });
        }
    } catch (error) {
        console.error('Error al registrar la mascota:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
