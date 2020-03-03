import { Router } from 'express';

import ProdutoController from './app/controllers/ProdutoController';
import VendaController from './app/controllers/VendaController';
import NotaController from './app/controllers/NotaController';
import TransportadorController from './app/controllers/TransportadorController';
import FornecedorController from './app/controllers/FornecedorController';
import FaturaController from './app/controllers/FaturaController';
import AssinaturaController from './app/controllers/AssinaturaController';
import AnualVendasController from './app/controllers/report/vendas/AnualController';
import AnualComprasController from './app/controllers/report/compras/AnualController';
import UltimasController from './app/controllers/report/compras/UltimasController';

const routes = new Router();

routes.get('/produtos/:codigo', ProdutoController.index);
routes.get('/vendas', VendaController.index);
routes.get('/notas', NotaController.index);
routes.get('/transportador', TransportadorController.index);
routes.get('/fornecedor', FornecedorController.index);
routes.get('/fatura', FaturaController.index);
routes.get('/assinatura', AssinaturaController.index);
routes.get('/report/vendas/anual', AnualVendasController.index);
routes.get('/report/compras/anual', AnualComprasController.index);
routes.get('/report/compras/anual', AnualComprasController.index);
routes.get('/report/compras/ultimas', UltimasController.index);
routes.post('/assinatura', AssinaturaController.store);

export default routes;
