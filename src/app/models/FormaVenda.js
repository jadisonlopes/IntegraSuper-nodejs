import Sequelize, { Model } from 'sequelize';

class FormaVenda extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.TABLE_FORMAVENDA,
      }
    );
    return this;
  }
}

export default FormaVenda;
