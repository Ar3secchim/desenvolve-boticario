'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.classe, {
        foreignKey: 'docente_id'
      })
      Users.hasMany(models.matricule, {
        foreignKey: 'student_id'
      })
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    defaultScope: {
      where: {active: true},
    },
  });
  return Users;
};