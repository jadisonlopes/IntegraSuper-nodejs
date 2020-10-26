import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        und: Sequelize.STRING,
        localiz: Sequelize.STRING,
        saldo: Sequelize.NUMBER,
      },
      {
        sequelize,
        tableName: process.env.TABLE_PRODUTO_SUPERNET,
      }
    );
    return this;
  }
}

export default Produto;
