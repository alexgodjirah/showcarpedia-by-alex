"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "Products",
            [
                {
                    title: "Cayman GT4",
                    brand: "Porsche",
                    year: 2019,
                    kiloMeter: 1000,
                    grade: 4,
                    category: "Sport",
                    photoProducts: [
                        "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
                        "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
                    ],
                    delete: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Fortuner",
                    brand: "Toyota",
                    year: 2020,
                    kiloMeter: 24000,
                    grade: 4,
                    category: "4x4",
                    photoProducts: [
                        "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
                        "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
                    ],
                    delete: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Products", null, {});
    },
};
