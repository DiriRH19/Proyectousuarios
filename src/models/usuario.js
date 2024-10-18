const pool = require('../config/database');

class Usuario {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM usuario');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(usuario) {
    const { nombre, correo, contraseña } = usuario;
    const [result] = await pool.query(
      'INSERT INTO usuario (nombre, correo, contraseña) VALUES (?, ?, ?)',
      [nombre, correo, contraseña]
    );
    return result.insertId;
  }

  static async update(id, usuario) {
    const { nombre, correo, contraseña } = usuario;
    const [result] = await pool.query(
      'UPDATE usuario SET nombre = ?, correo = ?, contraseña = ? WHERE id = ?',
      [nombre, correo, contraseña, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Usuario;
