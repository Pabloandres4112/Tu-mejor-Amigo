import { validationResult } from 'express-validator';
import { pool } from "../db/conexion.js";
import upload from "./Cargar.Img.js"; // Importa la instancia de Multer configurada

// Controlador para registrar una mascota
export const registrarMascota = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    upload(req, res, async function (err) {
      if (err) {
        console.error('Error al cargar la imagen:', err);
        return res.status(500).json({ message: 'Error al cargar la imagen' });
      }

      const { nombre, race_id, fk_categories, gender_id, user_id } = req.body; // Añadir user_id
      const photo = req.file ? req.file.path : null;

      // Verificar si el user_id existe en la tabla users
      const [userRows] = await pool.query('SELECT id FROM users WHERE id = ?', [user_id]);
      if (userRows.length === 0) {
        return res.status(400).json({ message: 'El user_id proporcionado no existe' });
      }

      const [result] = await pool.query(
        'INSERT INTO pets (nombre_pets, race_id, fk_categories, photo, gender_id, user_id) VALUES (?, ?, ?, ?, ?, ?)', 
        [nombre, race_id, fk_categories, photo, gender_id, user_id]
      );

      if (result.affectedRows > 0) {
        return res.status(200).json({ message: 'Mascota registrada correctamente' });
      } else {
        throw new Error('No se pudo registrar la mascota');
      }
    });
  } catch (error) {
    console.error('Error al registrar la mascota:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};









// Eliminar mascota
export const eliminarMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM pets WHERE id_pets  = ?', [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Mascota eliminada correctamente' });
    } else {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar la mascota:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Editar mascota
export const editarMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre , race_id, category_id, gender_id, photo } = req.body;

    let sql = '';
    let sqlParams = [];

    if (photo) {
      sql = 'UPDATE pets SET  race_id = ?, fk_categories = ?, gender_id = ?, photo = ? WHERE id_pets = ?';
      sqlParams = [race_id, category_id, gender_id, photo, id];
    } else {
      sql = 'UPDATE pets SET race_id = ?, fk_categories = ?, gender_id = ? WHERE id_pets = ?';
      sqlParams = [race_id, category_id, gender_id, id];
    }

    // Verificar si las categorías y géneros proporcionados existen en la base de datos

    // Ejecutar la actualización de la mascota
    const [result] = await pool.query(sql, sqlParams);

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Mascota actualizada correctamente' });
    } else {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar la mascota:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};






// Buscar mascota
export const buscarMascota = async (req, res) => {
  try {
    const { id } = req.params;
    
    const query = `
      SELECT
        p.nombre_pets AS nombre,
        p.photo,
        r.name_race AS raza,
        g.name_gender AS genero,
        c.name_category AS categoria
      FROM
        pets p
        LEFT JOIN races r ON p.race_id = r.id_race
        LEFT JOIN genders g ON p.gender_id = g.id_gender
        LEFT JOIN categories c ON p.fk_categories = c.id_category
      WHERE
        p.id_pets = ?;
    `;
    
    const [mascota] = await pool.query(query, [id]);
    if (mascota.length > 0) {
      mascota.forEach(mascota => {
        // La ruta de la imagen es relativa a la carpeta raíz del servidor
        mascota.photo = '/' + mascota.photo;
      });
    }
    if (mascota.length > 0) {
      return res.status(200).json(mascota[0]);
    } else {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
  } catch (error) {
    console.error('Error al buscar la mascota:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};






// Controlador para buscar y listar todas las mascotas
export const listarMascotas = async (req, res) => {
  try {
    // Modifica la consulta para seleccionar el id, nombre, la raza y la foto de las mascotas
    const query = `
      SELECT p.id_pets AS id, p.nombre_pets AS nombre, r.name_race AS raza, p.photo
      FROM pets p
      LEFT JOIN races r ON p.race_id = r.id_race
    `;
    const [mascotas] = await pool.query(query);

    // Si se encuentran mascotas, actualiza la ruta de la foto para que sea accesible desde el cliente
    if (mascotas.length > 0) {
      mascotas.forEach(mascota => {
        // La ruta de la imagen es relativa a la carpeta raíz del servidor
        mascota.photo = '/' + mascota.photo;
      });

      // Ahora cada mascota tiene un campo 'id' además de 'nombre', 'raza', y 'photo'
      return res.status(200).json(mascotas);
    } else {
      // Si no se encuentran mascotas, indica que no hay resultados
      return res.status(200).json([]);
    }
  } catch (error) {
    // En caso de error, se captura y se envía una respuesta con el mensaje de error
    console.error('Error al listar las mascotas:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};




// Controlador para actualizar una mascota
export const actualizarMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, race_id, fk_categories, gender_id } = req.body;
    let photo = null;

    if (req.file) {
      photo = req.file.path;
    }

    const updates = [];
    const params = [];

    if (nombre) {
      updates.push('nombre_pets = ?');
      params.push(nombre);
    }
    if (race_id) {
      updates.push('race_id = ?');
      params.push(race_id);
    }
    if (fk_categories) {
      // Verificar si fk_categories existe en la tabla categories
      const [categorias] = await pool.query('SELECT id_category FROM categories WHERE id_category = ?', [fk_categories]);
      if (categorias.length === 0) {
        return res.status(400).json({ message: 'La categoría especificada no es válida' });
      }
      updates.push('fk_categories = ?');
      params.push(fk_categories);
    }
    if (gender_id) {
      updates.push('gender_id = ?');
      params.push(gender_id);
    }
    if (photo) {
      updates.push('photo = ?');
      params.push(photo);
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: 'No se proporcionaron campos para actualizar' });
    }

    const sql = `UPDATE pets SET ${updates.join(', ')} WHERE id_pets = ?`;
    params.push(id);

    const [result] = await pool.query(sql, params);

    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Mascota actualizada correctamente' });
    } else {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar la mascota:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};


