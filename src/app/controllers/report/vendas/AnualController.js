import AnualVendas from '../../../models/AnualVendas';
import Produto from '../../../models/Produto';

class AnualController {
  async index(req, res) {
    const { filial, produto } = req.query;
    const report = await AnualVendas.findAll({
      where: {
        filial,
        produto,
      },
      attributes: [
        'filial',
        'totalnotas',
        'maiordomes',
        'qtdevendido',
        'valorvendido',
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
