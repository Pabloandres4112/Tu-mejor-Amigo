import { validationResult } from 'express-validator';
import { pool } from "../db/conexion.js";
import upload from "./Cargar.Img.js"; // Importa la instancia de Multer configurada

// Controlador para registrar una mascota
export const registrarMascota = async (req, res) => {
  try {
    // Comprobar errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Manejar la carga de archivos con Multer
    upload(req, res, async function (err) {
      if (err) {
        // Manejar errores de carga de archivos
        console.error('Error al cargar la imagen:', err);
        return res.status(500).json({ message: 'Error al cargar la imagen' });
      }

      // Obtener datos del cuerpo de la solicitud y la ruta del archivo cargado
      const { race_id, category_id, gender_id, user_id } = req.body;
      const photo = req.file ? req.file.path : null;

      // Insertar mascota en la base de datos
      const [result] = await pool.query('INSERT INTO pets (race_id, category_id, photo, gender_id, user_id) VALUES (?, ?, ?, ?, ?)', [race_id, category_id, photo, gender_id, user_id]);

      if (result.affectedRows > 0) {
        // Mascota registrada correctamente
        return res.status(200).json({ message: 'Mascota registrada correctamente' });
      } else {
        // Error al registrar la mascota en la base de datos
        throw new Error('No se pudo registrar la mascota');
      }
    });
  } catch (error) {
    // Manejar errores generales
    console.error('Error al registrar la mascota:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
