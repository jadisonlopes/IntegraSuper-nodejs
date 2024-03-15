import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        fisica: Sequelize.STRING,
        cpf_cnpj: Sequelize.STRING,
        endereco: Sequelize.STRING,
        bairro: Sequelize.STRING,
        estado: Sequelize.STRING,
        cidade: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: process.env.TABLE_CLIENTE,
      }
    );
    return this;
  }
}

export default Cliente;
