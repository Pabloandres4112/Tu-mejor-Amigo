import { pool } from "../db/conexion.js";
import bcrypt from 'bcrypt';

export const registroUsuario = async (req, res) => {
    const { nombre, correo, password } = req.body;

    try {
        // Generar el hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Ejecutar la consulta SQL con la contraseña encriptada
        const [result] = await pool.query('INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)', [nombre, correo, hashedPassword]);

        // Verificar si se insertaron filas
        if (result.affectedRows > 0) {
            res.status(200).json('Registro exitoso');
        } else {
            res.status(500).json('Error al registrar usuario');
        }
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json('Error al registrar usuario');
    }
};
