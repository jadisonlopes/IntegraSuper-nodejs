import Sequelize, { Model } from 'sequelize';

class Codbarra extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        codbarra: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.TABLE_CODBARRA,
      }
    );
    return this;
  }
}

export default Codbarra;
