import { Op } from 'sequelize';

import Venda from '../models/Venda';
import Produto from '../models/Produto';
import Codbarra from '../models/Codbarra';
import Cliente from '../models/Cliente';

class VendaContratoServico {
	async recuperar(codigoVenda) {
		try {
			const venda = await Venda.findAll({
				where: {
					filial: '01',
					sr_deleted: {
						[Op.ne]: 'T',
					},
					[Op.or]: [{ excluida: null }, { excluida: false }],
					[Op.or]: [{ notas: codigoVenda }, { nfe: codigoVenda }],
				},
				raw: true,
				nest: true,
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

			return venda;

			// return {
			// 	CONTRATO: '000001',
			// 	NOME_CLIENTE: "Icaro Portela Pires",
			// 	ENDERECO_CLIENTE: 'Rua G, n. 142, bairro Muchila, Feira de Santana-BA, CEP.: 44.005-352',
			// 	CPF_CNPJ: 'CPF',
			// 	NCPF_CNPJ: "001.002.003-04",
			// 	DATA_PEDIDO: "01/01/2024",
			// 	VALOR_TOTAL: "R$ 1.854.000,00",
			// 	PRODUTO_01: "Produto Teste",
			// 	NOME_FORMA_PAGAMENTO: "A VISTA",
			// 	LOCAL_DATA_DE_PAGAMENTO: "Feira de Santana - BA 01/01/2024"
			// }
		} catch (error) {
			console.error('Ocorreu um erro:', error);
		}
	}
}

export default VendaContratoServico;