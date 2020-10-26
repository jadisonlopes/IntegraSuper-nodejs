import { Op } from 'sequelize';
import { format } from 'date-fns'; 
import Balanco from '../models/Balanco';
import SupernetProduto from '../models/SupernetProduto';
import SupernetSaldofil from '../models/SupernetSaldofil';

class BalancoController {
    async store(req, res) {
        const { produto, contagem, saldoatu, usuario } = req.body;
        const qtde = (contagem - saldoatu);

        if (qtde === 0) return res.status(200).json({message: 'Sem alteração'});
        
        const balanco = await Balanco.create({filial: '01', documento:'AJUSTE MOBILE', produto, data: format(new Date(), 'yyyy-MM-dd'), hora: format(new Date(), 'HH:mm:ss'), usuario, saldoatu: contagem, qtde});

        const where = {
              codigo: produto,
              sr_deleted: {
                [Op.ne]: 'T',
              },
            };
    
        const saldo = (Number(saldoatu) + Number(qtde));
        
        await SupernetProduto.update({ saldo }, { where });
        await SupernetSaldofil.update({ saldo }, { where: { ... where, filial: '01' } });

        return res.status(200).json(balanco);
    }
}

export default new BalancoController();
