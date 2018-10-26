'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('mns', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            mns: {
                type: Sequelize.TEXT
            },
            topic: {
                type: Sequelize.STRING
            },
            messageid: {
                type: Sequelize.STRING
            },
            generatetime: {
                type: Sequelize.BIGINT
            },
            classs: {
                type: Sequelize.TEXT
            },
            qos: {
                type: Sequelize.INTEGER
            },
            productName: {
                type: Sequelize.STRING
            },
            deviceName: {
                type: Sequelize.STRING
            },
            created: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('mns');
    }
};