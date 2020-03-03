import Sequelize, { Model } from 'sequelize';

class UltimasCompras extends Model {
  static init(sequelize) {
    super.init(
      {
        filial: Sequelize.STRING,
        fornecedor: Sequelize.STRING,
        produto: Sequelize.STRING,
        chegada: Sequelize.DATE,
        preco: Sequelize.NUMBER,
        qtde: Sequelize.NUMBER,
        notas: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
      },
      {
        sequelize,
        tableName: process.env.TABLE_PRODUTOSCOMPRAS,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor' });
  }
}

export default UltimasCompras;
