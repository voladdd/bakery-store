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
    const bulk = [];
    await (async () => {
      [
        3, 1, 2, 3, 1, 1, 3, 2, 3, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 3, 3, 1,
      ].forEach((value, index) => {
        bulk.push({
          productId: index + 1,
          categoryId: value,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    })();
    await queryInterface.bulkInsert('product_categories', bulk, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('product_categories', null, {});
  },
};
