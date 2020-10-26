import Sequelize, { Model } from 'sequelize';

class Balanco extends Model {
  static init(sequelize) {
    super.init(
      {
        produto: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        filial: Sequelize.STRING,
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
        usuario: Sequelize.STRING,
        documento: Sequelize.STRING,
        qtde: Sequelize.NUMBER,
        saldoatu: Sequelize.NUMBER,
      },
      {
        sequelize,
        tableName: process.env.TABLE_BALANCO,
      }
    );
    return this;
  }
}

export default Balanco;
