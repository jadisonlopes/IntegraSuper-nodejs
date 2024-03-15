import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        und: Sequelize.STRING,
        codbarra: Sequelize.STRING,
        marca: Sequelize.STRING,
        localiz: Sequelize.STRING,
        impetiq: Sequelize.STRING,
        saldo: Sequelize.NUMBER,
      },
      {
        sequelize,
        tableName: process.env.TABLE_PRODUTO,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Codbarra, { foreignKey: 'codigo' });
  }
}

export default Produto;
