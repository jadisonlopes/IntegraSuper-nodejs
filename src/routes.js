import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('Jadison Lopes Santos'));

export default routes;
