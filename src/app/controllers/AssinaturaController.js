import { Op } from 'sequelize';

import Assinatura from '../models/Assinatura';

class AssinaturaController {
  async index(req, res) {
    const { notas } = req.query;
    const assinatura = await Assinatura.findOne({
      where: {
        notas,
        sr_deleted: {
          [Op.ne]: 'T',
        },
      },
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
