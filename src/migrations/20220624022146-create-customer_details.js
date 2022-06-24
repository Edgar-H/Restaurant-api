'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('customer_details', {
            uuid: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
            },
            user_uuid: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            st_customer_id: {
                type: DataTypes.UUID,
                allowNull: true,
            },
            st_default_payment_method_id: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            default_address_uuid: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: 'customer_addresses',
                    key: 'uuid',
                },
            },
        });
     await queryInterface.addConstraint('customer_details', {
         fields: ['uuid'],
         type: 'unique',
         name: 'customer_details_pkey_2',
     });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
      await queryInterface.dropTable('customer_details');
    },
};
