"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            brand: {
                type: Sequelize.STRING,
            },
            year: {
                type: Sequelize.INTEGER,
            },
            kiloMeter: {
                type: Sequelize.INTEGER,
            },
            grade: {
                type: Sequelize.INTEGER,
            },
            category: {
                type: Sequelize.STRING,
            },
            photoProducts: {
                type: Sequelize.ARRAY,
            },
            description: {
                type: Sequelize.STRING,
            },
            delete: {
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    },
};
