import Sequelize, { Model } from 'sequelize';

class Fornecedor extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        fantasia: Sequelize.STRING,
        fisica: Sequelize.STRING,
        cpf_cnpj: Sequelize.STRING,
        rg_ie: Sequelize.STRING,
        fone: Sequelize.STRING,
        endereco: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.TABLE_FORNECEDOR,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Codbarra, { foreignKey: 'codigo' });
  }
}

export default Fornecedor;
