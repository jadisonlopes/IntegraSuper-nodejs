import { Op } from 'sequelize';

import Fatura from '../models/Fatura';

class FaturaController {
  async index(req, res) {
    const { filial, notas } = req.query;
    const fatura = await Fatura.findOne({
      where: {
        filial,
        notas,
        sr_deleted: {
          [Op.ne]: 'T',
        },
        documento: 'BO',
      },
      attributes: ['filial', 'notas', 'totparc'],
    });
    return res.status(200).json(fatura);
  }
}

export default new FaturaController();
