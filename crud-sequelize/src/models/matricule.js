'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matricule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      matricule.belongsTo(models.Users, {
        foreignKey:  'student_id'
      })
      matricule.belongsTo(models.classe, {
        foreignKey: 'clesse_id'
      })
      // define association here
    }
  }
  matricule.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matricule',
  });
  return matricule;
};