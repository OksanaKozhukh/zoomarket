'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.createTable("Animals", {
                id: {
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                    type: Sequelize.INTEGER
                },
                species: {
                    allowNull: false,
                    type: Sequelize.STRING
                },
                name: {
                    type: Sequelize.STRING
                },
                image: {
                    type: Sequelize.STRING
                },
                price: {
                    allowNull: false,
                    type: Sequelize.INTEGER
                },
                gender: {
                    type: Sequelize.STRING
                },
                weight: {
                    type: Sequelize.INTEGER
                },
                birth_date: {
                    allowNull: false,
                    type: Sequelize.DATEONLY
                },
                color: {
                    allowNull: false,
                    type: Sequelize.STRING
                },
                breed: {
                    allowNull: false,
                    type: Sequelize.STRING
                },
                is_sterile: {
                    allowNull: false,
                    type: Sequelize.BOOLEAN
                },
                hair: {
                    allowNull: false,
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            })
            transaction.commit();
        } catch (error) {
            transaction.rollback();
        }
	},

	down: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.dropTable("Animals");
        } catch (error) {
            transaction.rollback();
        }
	}
};
