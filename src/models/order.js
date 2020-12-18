'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User)
      Order.hasMany(models.OrderDetail)
    }
  };
  Order.init({
    address: DataTypes.STRING,
    note: DataTypes.TEXT,
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT,
    state: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};