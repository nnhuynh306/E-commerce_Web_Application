'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category);
      Product.hasMany(models.OrderDetail)
      Product.hasMany(models.Comment);
 
    }
  };
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    smallImagePath: DataTypes.STRING,
    bigImagePath: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};