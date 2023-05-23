'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      classe.belongsTo(models.Users, {
        foreignKey: 'docente_id'
      })
      classe.belongsTo(models.cla,{
        foreignKey: 'nivel_id'
      })
    }
  }
  classe.init({
    date_start: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'classe',
  });
  return classe;
};