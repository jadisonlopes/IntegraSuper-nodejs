import { Op } from 'sequelize';
import Produto from '../models/Produto';

class ProdutoController {
  async index(req, res) {
    const { codigo } = req.params;
    const produto = await Produto.findOne({
      where: {
        codigo,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
    });
    return res.status(200).json(produto);
  }
}

export default new ProdutoController();
