import { Op } from 'sequelize';

import Transportador from '../models/Transportador';

class TransportadorController {
  async index(req, res) {
    const { codigo } = req.query;
    const transportador = await Transportador.findOne({
      where: {
        codigo,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
    });
    return res.status(200).json(transportador);
  }
}

export default new TransportadorController();
