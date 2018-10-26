'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    goods_id: DataTypes.INTEGER,
    order_no: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};