'use strict';
module.exports = (sequelize, DataTypes) => {
  const goods = sequelize.define('goods', {
    name: DataTypes.STRING
  }, {});
  goods.associate = function(models) {
    // associations can be defined here
    //   models.user = goods.hasOne(models.User,{ foreignKey: 'user_id' ,as:'Users'})
  };
  return goods;
};