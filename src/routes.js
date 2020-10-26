import { Router } from 'express';

import ProdutoController from './app/controllers/ProdutoController';
import SupernetProdutoController from './app/controllers/SupernetProdutoController';
import VendaController from './app/controllers/VendaController';
import NotaController from './app/controllers/NotaController';
import TransportadorController from './app/controllers/TransportadorController';
import FornecedorController from './app/controllers/FornecedorController';
import FaturaController from './app/controllers/FaturaController';
import AssinaturaController from './app/controllers/AssinaturaController';
import UsuarioController from './app/controllers/UsuarioController';
import UsuarioPermitidoController from './app/controllers/UsuarioPermitidoController';
import BalancoController from './app/controllers/BalancoController';
import AcessoController from './app/controllers/AcessoController';
import AnualVendasController from './app/controllers/report/vendas/AnualController';
import AnualComprasController from './app/controllers/report/compras/AnualController';
import UltimasController from './app/controllers/report/compras/UltimasController';

const routes = new Router();

routes.get('/produtos/:codigo', ProdutoController.index);
routes.get('/supernet/produtos/:codigo', SupernetProdutoController.index);
routes.get('/vendas', VendaController.index);
routes.get('/notas', NotaController.index);
routes.get('/transportador', TransportadorController.index);
routes.get('/fornecedor', FornecedorController.index);
routes.get('/fatura', FaturaController.index);
routes.get('/assinatura', AssinaturaController.index);
routes.get('/usuario/:codigo', UsuarioController.index);
routes.get('/usuario/permitido/:usuario', UsuarioPermitidoController.index);
routes.get('/usuario/acesso/:usuario', AcessoController.index);
routes.post('/balanco', BalancoController.store);
routes.get('/report/vendas/anual', AnualVendasController.index);
routes.get('/report/compras/anual', AnualComprasController.index);
routes.get('/report/compras/anual', AnualComprasController.index);
routes.get('/report/compras/ultimas', UltimasController.index);
routes.post('/assinatura', AssinaturaController.store);

export default routes;
