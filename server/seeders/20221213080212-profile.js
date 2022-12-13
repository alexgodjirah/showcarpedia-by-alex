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
            "Profiles",
            [
                {
                    UserId: 1,
                    fullName: "Administrator",
                    birthDate: "12-13-2022",
                    city: "Surabaya",
                    country: "Indonesia",
                    mobilePhone: "6291330768081",
                    profilePicture:
                        "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
                    delete: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    UserId: 2,
                    fullName: "Jeremiah",
                    birthDate: "10-03-2022",
                    city: "Binar Academy",
                    country: "Berbinaria",
                    mobilePhone: "628103011999",
                    profilePicture:
                        "https://cdn.discordapp.com/attachments/960564590574456852/965225077069193326/jhondoe.jpg",
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
        await queryInterface.bulkDelete("Profiles", null, {});
    },
};
