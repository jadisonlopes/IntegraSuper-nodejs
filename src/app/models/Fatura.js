import Sequelize, { Model } from 'sequelize';

class Fatura extends Model {
  static init(sequelize) {
    super.init(
      {
        filial: Sequelize.STRING,
        totparc: Sequelize.NUMBER,
        notas: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
      },
      {
        sequelize,
        tableName: process.env.TABLE_FATURA,
      }
    );
    return this;
  }
}

export default Fatura;
