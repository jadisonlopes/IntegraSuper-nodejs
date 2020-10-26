import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Produto from '../app/models/Produto';
import SupernetProduto from '../app/models/SupernetProduto';
import Venda from '../app/models/Venda';
import Codbarra from '../app/models/Codbarra';
import Cliente from '../app/models/Cliente';
import Transportador from '../app/models/Transportador';
import Fornecedor from '../app/models/Fornecedor';
import Fatura from '../app/models/Fatura';
import Assinatura from '../app/models/Assinatura';
import Usuario from '../app/models/Usuario';
import Balanco from '../app/models/Balanco';
import SupernetSaldofil from '../app/models/SupernetSaldofil';
import AnualVendas from '../app/models/AnualVendas';
import AnualCompras from '../app/models/AnualCompras';
import UltimasCompras from '../app/models/UltimasCompras';

const models = [
  Produto,
  SupernetProduto,
  Venda,
  Codbarra,
  Cliente,
  Transportador,
  Fornecedor,
  Fatura,
  Assinatura,
  Usuario,
  Balanco,
  SupernetSaldofil,
  AnualVendas,
  AnualCompras,
  UltimasCompras,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
