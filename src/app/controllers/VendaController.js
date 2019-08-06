import { Op } from 'sequelize';
import Venda from '../models/Venda';

class VendaController {
  async index(req, res) {
    const { filial, notas } = req.query;
    const venda = await Venda.findAll({
      where: {
        filial,
        notas,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
    });
    return res.status(200).json(venda);
  }
}

export default new VendaController();
