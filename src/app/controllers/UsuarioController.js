import { Op } from 'sequelize';
import Usuario from '../models/Usuario';

class UsuarioController {
  async index(req, res) {
    const { codigo } = req.params;
    const usuario = await Usuario.findOne({
      where: {
        usuario: codigo,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
    });
    return res.status(200).json(usuario);
  }
}

export default new UsuarioController();
