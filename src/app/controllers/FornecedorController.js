import { Op } from 'sequelize';

import Fornecedor from '../models/Fornecedor';

class FornecedorController {
  async index(req, res) {
    const { codigo } = req.query;
    const fornecedor = await Fornecedor.findOne({
      where: {
        codigo,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
    });
    return res.status(200).json(fornecedor);
  }
}

export default new FornecedorController();
