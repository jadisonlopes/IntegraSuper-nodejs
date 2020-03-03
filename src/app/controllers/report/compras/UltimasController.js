import { Op } from 'sequelize';

import UltimasCompras from '../../../models/UltimasCompras';
import Produto from '../../../models/Produto';
import Fornecedor from '../../../models/Fornecedor';

class UltimasController {
  async index(req, res) {
    const { filial, produto } = req.query;
    const report = await UltimasCompras.findAll({
      where: {
        filial,
        produto,
      },
      attributes: ['filial', 'fornecedor', 'notas', 'chegada', 'preco', 'qtde'],
      include: [
        {
          model: Fornecedor,
          where: {
            sr_deleted: {
              [Op.ne]: 'T',
            },
          },
        },
      ],
      limit: 5,
    });

    const product = await Produto.findOne({
      where: {
        codigo: produto,
      },
    });

    const result = { produto: product, compras: report };

    return res.status(200).json(result);
  }
}

export default new UltimasController();
