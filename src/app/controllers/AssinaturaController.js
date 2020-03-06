import { Op } from 'sequelize';

import Assinatura from '../models/Assinatura';
import Venda from '../models/Venda';

class AssinaturaController {
  async index(req, res) {
    const { notas } = req.query;

    const assinatura = await Assinatura.findOne({
      where: {
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
      include: [
        {
          model: Venda,
          attributes: [],
          where: {
            filial: '01',
            sr_deleted: {
              [Op.ne]: 'T',
            },
            [Op.or]: [{ excluida: null }, { excluida: false }],
            [Op.or]: [{ notas }, { nfe: notas }],
          },
          required: true,
        },
      ],
      attributes: ['notas', 'nome', 'cpf'],
    });

    return res.status(200).json(assinatura);
  }

  async store(req, res) {
    const { notas } = req.body;
    const assinaturaExists = await Assinatura.findOne({
      where: {
        notas,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
      attributes: ['notas'],
    });

    if (assinaturaExists) {
      return res.status(400).json({ error: 'Assinatura já coletada!' });
    }

    await Assinatura.create(req.body);

    return res.status(200).send('Gravado!');
  }
}

export default new AssinaturaController();
