'use strict';

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
      'categories',
      [
        {
          title: 'Выпечка',
          description: `В старину на Руси выпечка играла важную роль. Считалось, что настоящая хозяйка обязательно должна уметь печь пироги.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Хлеб',
          description: `Хлеб - продукт живой, он даже дышит, а поэтому требует много внимания. Казалось бы, все просто: вода, мука, дрожжи. Но сколько нюансов надо учесть!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Напитки',
          description: `Безалкогольные и алкогольные напитки в силу своих вкусовых качеств всегда были неотъемлемой частью обеда или ужина, здорового завтрака или атрибутом отдыха и расслабления.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  },
};
