import { Op } from 'sequelize';

import Venda from '../models/Venda';
import Produto from '../models/Produto';
import Codbarra from '../models/Codbarra';
import Cliente from '../models/Cliente';

class VendaController {
  async index(req, res) {
    const { filial, notas } = req.query;
    const venda = await Venda.findAll({
      where: {
        filial,
        sr_deleted: {
          [Op.ne]: 'T',
        },
        [Op.or]: [{ excluida: null }, { excluida: false }],
        [Op.or]: [{ notas }, { nfe: notas }],
      },
      attributes: [
        'filial',
        'notas',
        'data',
        'total',
        'subtotal',
        'preco',
        'qtde',
        'sr_recno',
      ],
      order: [['Produto', 'codigo', 'ASC']],
      include: [
        {
          model: Cliente,
          attributes: ['codigo', 'nome', 'cpf_cnpj'],
          where: {
            sr_deleted: {
              [Op.ne]: 'T',
            },
          },
        },
        {
          model: Produto,
          attributes: ['codigo', 'nome', 'und', 'codbarra', 'marca'],
          where: {
            sr_deleted: {
              [Op.ne]: 'T',
            },
          },
          include: [
            {
              model: Codbarra,
              required: false,
              attributes: ['codbarra'],
              where: {
                sr_deleted: {
                  [Op.ne]: 'T',
                },
              },
            },
          ],
        },
      ],
    });

    return res.status(200).json(venda);
  }
}

export default new VendaController();
