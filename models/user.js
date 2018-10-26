'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    like: DataTypes.STRING,
    like1: DataTypes.STRING,

  }, {});
  User.associate = function(models) {
    // associations can be defined here
      console.log(1212)
      console.log(models['goods'])
      models.User.hasMany(models.goods, {foreignKey:'user_id'});
  };
  return User;
};