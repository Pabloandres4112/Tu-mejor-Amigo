import { pool } from "../db/conexion.js";
import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const validar = async (req, res) => {
    try {
        const { correo, password } = req.body;
        
        const [rows] = await pool.query('SELECT * FROM users WHERE correo = ? AND password = ?', [correo, password], );
        console.log(rows);

        if (rows.length > 0) {
            const user = rows[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = Jwt.sign({ user }, process.env.AUT_SECRET, { expiresIn: process.env.AUT_EXPIRE });
                return res.status(200).json({ nombre: user.fullname, token: token, message: 'Token generado con éxito' });
            } else {
                return res.status(404).json({ message: 'Credenciales inválidas' });
            }
        } else {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Error del servidor: ' + error.message });
    }
};




export const validarToken = async (req, res, next) => {
    try {
        const tokenClient = req.headers['token'];
        if (!tokenClient) {
            return res.status(403).json({ message: 'Token es requerido' });
        } else {
            Jwt.verify(tokenClient, process.env.AUT_SECRET, (error, decoded) => {
                if (error) {
                    return res.status(403).json({ message: 'Token inválido: ' + error.message });
                } else {
                    next();
                }
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Error del servidor: ' + error.message });
    }
};
