import { Op } from 'sequelize';
import { format, parseISO } from 'date-fns'
import * as formatadorUtil from '../utils/FormatadorUtil'

import Venda from '../models/Venda';
import Produto from '../models/Produto';
import Codbarra from '../models/Codbarra';
import Cliente from '../models/Cliente';
import FormaVenda from '../models/FormaVenda';

class VendaContratoServico {
	async recuperar(codigoVenda) {
		try {
			const vendas = await Venda.findAll({
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
					'formavend',
					'preco',
					'qtde',
					'sr_recno',
				],
				order: [['Produto', 'codigo', 'ASC']],
				include: [
					{
						model: Cliente,
						attributes: ['codigo', 'nome', 'cpf_cnpj', 'fisica', 'endereco', 'bairro', 'estado', 'cep', 'email', 'cidade'],
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
					{
						model: FormaVenda,
						attributes: ['nome'],
						where: {
							sr_deleted: {
								[Op.ne]: 'T',
							},
						},
					},
				],
			});

			const venda = vendas[0];
			const cliente = venda.Cliente;
			const produto = venda.Produto;
			const produtoFormatado = `${Math.trunc(venda.qtde)}      ${produto.und} ${produto.codigo}   ${produto.nome} ${formatadorUtil.precoBr(venda.preco)} ${formatadorUtil.precoBr(venda.preco * venda.qtde)}`;
			const endereco = `${cliente.endereco}, ${cliente.bairro}, ${cliente.cidade}-${cliente.estado}, CEP.: ${cliente.cep}`;
			const dataFormatada = format(parseISO(venda.data), 'dd/MM/yyyy');

			return {
				CONTRATO: venda.notas,
				NOME_CLIENTE: cliente.nome,
				ENDERECO_CLIENTE: endereco,
				CPF_CNPJ: cliente.fisica == 'J' ? 'CNPJ' : 'CPF',
				NCPF_CNPJ: formatadorUtil.cpfCnpj(cliente.cpf_cnpj),
				DATA_PEDIDO: dataFormatada,
				VALOR_TOTAL: formatadorUtil.precoBr(venda.subtotal),
				NOME_FORMA_PAGAMENTO: venda.FormaVenda.nome,
				LOCAL_DATA_DE_PAGAMENTO: `Feira de Santana-BA ${dataFormatada}`,				
				PRODUTO: produtoFormatado,				
			}
		} catch (error) {
			console.error('Ocorreu um erro:', error);
		}
	}
}

export default VendaContratoServico;