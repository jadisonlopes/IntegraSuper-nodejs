import Sequelize, { Model } from 'sequelize';

class Venda extends Model {
  static init(sequelize) {
    super.init(
      {
        filial: Sequelize.STRING,
        cliente: Sequelize.STRING,
        data: Sequelize.DATE,
        total: Sequelize.NUMBER,
        subtotal: Sequelize.NUMBER,
        produto: Sequelize.STRING,
        chnfe: Sequelize.STRING,
        qtde: Sequelize.NUMBER,
        preco: Sequelize.NUMBER,
        sr_recno: Sequelize.NUMBER,
        notas: {
          type: Sequelize.STRING,
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

  static associate(models) {
    this.belongsTo(models.Produto, { foreignKey: 'produto' });
    this.belongsTo(models.Cliente, { foreignKey: 'cliente' });
    this.belongsTo(models.Fatura, { foreignKey: 'notas' });
  }
}

export default Venda;
