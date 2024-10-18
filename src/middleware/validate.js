const Joi = require('joi');

const usuarioSchema = Joi.object({
  nombre: Joi.string().required(),
  correo: Joi.string().required(),
  contraseña: Joi.string().required()
});

exports.validateUsuario = (req, res, next) => {
  const { error } = usuarioSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

/*
Joi es una librería de validación de datos para JavaScript que permite definir esquemas de validación de forma declarativa. 
Se utiliza comúnmente en aplicaciones Node.js para validar datos de entrada, como por ejemplo, los datos enviados en una solicitud HTTP.

*/

