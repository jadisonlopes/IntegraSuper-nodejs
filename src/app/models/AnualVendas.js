import Sequelize, { Model } from 'sequelize';

class AnualVendas extends Model {
  static init(sequelize) {
    super.init(
      {
        filial: Sequelize.STRING,
        produto: Sequelize.STRING,
        totalnotas: Sequelize.NUMBER,
        maiordomes: Sequelize.NUMBER,
        qtdevendido: Sequelize.NUMBER,
        valorvendido: Sequelize.NUMBER,
        qtdedevolvida: Sequelize.NUMBER,
        valordevolvido: Sequelize.NUMBER,
        saldo: Sequelize.NUMBER,
        total: Sequelize.NUMBER,
        mes: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
      },
      {
        sequelize,
        tableName: process.env.TABLE_ANALISAVENDAS,
      }
    );
    return this;
  }
}

export default AnualVendas;
