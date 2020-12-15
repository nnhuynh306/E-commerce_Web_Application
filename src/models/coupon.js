'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Coupon.init({
    code: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    useNumber: DataTypes.INTEGER,
    maxUseNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};