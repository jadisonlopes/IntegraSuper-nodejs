import Sequelize, { Model } from 'sequelize';

class Assinatura extends Model {
  static init(sequelize) {
    super.init(
      {
        notas: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        imagemnfe: Sequelize.STRING,
        imagemboleto: Sequelize.STRING,
        conferencia: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.TABLE_ASSINATURA,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Venda, { foreignKey: 'notas' });
  }
}

export default Assinatura;
