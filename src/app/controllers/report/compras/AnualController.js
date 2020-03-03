import AnualCompras from '../../../models/AnualCompras';
import Produto from '../../../models/Produto';

class AnualController {
  async index(req, res) {
    const { filial, produto } = req.query;
    const report = await AnualCompras.findAll({
      where: {
        filial,
        produto,
      },
      attributes: [
        'filial',
        'totalnotas',
        'maiordomes',
        'qtdecomprado',
        'valorcomprado',
        'qtdedevolvida',
        'valordevolvido',
        'saldo',
        'total',
        'mes',
      ],
    });

    const product = await Produto.findOne({
      where: {
        codigo: produto,
      },
    });

    const result = { produto: product, mes: report };

    return res.status(200).json(result);
  }
}

export default new AnualController();
