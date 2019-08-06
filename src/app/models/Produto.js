import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: Sequelize.STRING,
        nome: Sequelize.STRING,
        sr_recno: {
          type: Sequelize.NUMBER,
          primaryKey: true,
        },
      },
      {
        sequelize,
        tableName: process.env.TABLE_PRODUTO,
      }
    );
    return this;
  }
}

export default Produto;
