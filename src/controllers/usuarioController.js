const Usuario = require('../models/usuario');

exports.getAllUsuarios = async (req, res) => {
  const usuarios = await Usuario.getAll();
  res.json(usuarios);
};

exports.getusuarioById = async (req, res) => {
  const usuario = await Usuario.getById(req.params.id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

exports.createusuario = async (req, res) => {
  const id = await Usuario.create(req.body);
  res.status(201).json({ id, ...req.body });
};

exports.updateUsuario = async (req, res) => {
  const affectedRows = await Usuario.update(req.params.id, req.body);
  if (affectedRows) {
    res.json({ id: req.params.id, ...req.body });
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

exports.deleteUsuario = async (req, res) => {
  const affectedRows = await Usuario.delete(req.params.id);
  if (affectedRows) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};
