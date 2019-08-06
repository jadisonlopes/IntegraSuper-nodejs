import Sequelize, { Model } from 'sequelize';

class Venda extends Model {
  static init(sequelize) {
    super.init(
      {
        filial: Sequelize.STRING,
        notas: Sequelize.STRING,
        cliente: Sequelize.STRING,
        data: Sequelize.DATE,
        produto: Sequelize.STRING,
        qtde: Sequelize.NUMBER,
        preco: Sequelize.NUMBER,
        sr_recno: {
          type: Sequelize.NUMBER,
          primaryKey: true,
        },
      },
      {
        sequelize,
        tableName: process.env.TABLE_VENDA,
      }
    );
    return this;
  }
}

export default Venda;
