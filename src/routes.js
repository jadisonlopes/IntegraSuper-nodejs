import { Router } from 'express';

import ProdutoController from './app/controllers/ProdutoController';
import VendaController from './app/controllers/VendaController';

const routes = new Router();

routes.get('/produtos/:codigo', ProdutoController.index);
routes.get('/vendas', VendaController.index);

export default routes;
