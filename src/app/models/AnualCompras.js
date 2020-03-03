import Sequelize, { Model } from 'sequelize';

class AnualCompras extends Model {
  static init(sequelize) {
    super.init(
      {
        filial: Sequelize.STRING,
        produto: Sequelize.STRING,
        totalnotas: Sequelize.NUMBER,
        maiordomes: Sequelize.NUMBER,
        qtdecomprado: Sequelize.NUMBER,
        valorcomprado: Sequelize.NUMBER,
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
        tableName: process.env.TABLE_ANALISACOMPRAS,
      }
    );
    return this;
  }
}

export default AnualCompras;
