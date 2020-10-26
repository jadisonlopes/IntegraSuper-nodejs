import { Op } from 'sequelize';
import SupernetProduto from '../models/SupernetProduto';

class SupernetProdutoController {
  async index(req, res) {
    const { codigo } = req.params;
    const produto = await SupernetProduto.findOne({
      where: {
        [Op.or]: [{ codigo }, { codbarra: codigo }],        
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
    });
    return res.status(200).json(produto);
  }
}

export default new SupernetProdutoController();
