import Sequelize, { Model } from 'sequelize';

class Transportador extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        motorista: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.TABLE_TRANSPOR,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Codbarra, { foreignKey: 'codigo' });
  }
}

export default Transportador;
