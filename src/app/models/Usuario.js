import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
      },
      {
        sequelize,
        tableName: process.env.TABLE_USUARIO,
      }
    );
    return this;
  }
}

export default Usuario;
