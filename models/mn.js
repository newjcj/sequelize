'use strict';
module.exports = (sequelize, DataTypes) => {
  const mn = sequelize.define('mn', {
    mns: DataTypes.TEXT,
      topic: DataTypes.STRING,
      messageid: DataTypes.STRING,
      generatetime: DataTypes.BIGINT,
      classs: DataTypes.TEXT,
      qos: DataTypes.INTEGER,
      created: DataTypes.DATE,
  }, {});
  mn.associate = function(models) {
    // associations can be defined here
  };
  return mn;
};