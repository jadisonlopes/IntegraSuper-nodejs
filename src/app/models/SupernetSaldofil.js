import Sequelize, { Model } from 'sequelize';

class Saldofil extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        filial: Sequelize.STRING,
        saldo: Sequelize.NUMBER,
      },
      {
        sequelize,
        tableName: process.env.TABLE_SALDOFIL_SUPERNET,
      }
    );
    return this;
  }
}

export default Saldofil;
