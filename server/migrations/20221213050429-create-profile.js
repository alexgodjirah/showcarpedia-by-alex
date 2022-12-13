"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Profiles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fullName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            birthDate: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            mobilePhone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            profilePicture: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Users",
                        key: "id",
                        as: "UserId",
                    },
                },
            },
            delete: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
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
        await queryInterface.dropTable("Profiles");
    },
};
