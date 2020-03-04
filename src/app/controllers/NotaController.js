import { Op } from 'sequelize';

import Venda from '../models/Venda';
import Cliente from '../models/Cliente';

class NotaController {
  async index(req, res) {
    const { filial, notas } = req.query;
    const venda = await Venda.findOne({
      where: {
        filial,
        sr_deleted: {
          [Op.ne]: 'T',
        },
        [Op.or]: [{ excluida: null }, { excluida: false }],
        [Op.or]: [{ notas }, { nfe: notas }],
      },
      include: [
        {
          model: Cliente,
          attributes: ['nome', 'cpf_cnpj'],
          where: {
            sr_deleted: {
              [Op.ne]: 'T',
            },
          },
        },
      ],
      attributes: ['filial', 'notas', 'data', 'cliente', 'total', 'subtotal'],
    });
    return res.status(200).json(venda);
  }
}

export default new NotaController();
