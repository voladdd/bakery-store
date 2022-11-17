module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'products',
          'test',
          {
            type: Sequelize.DataTypes.INTEGER,
          },
          { transaction: t },
        ),
      ]);
    });
  },
  down: (queryInterface) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('products', 'test', { transaction: t }),
      ]);
    });
  },
};
