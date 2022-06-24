//!DEPENDENCIAS
const uuid = require('uuid');
const { customer_details, customer_addresses } =
    require('../models/init-models').initModels();

const getUserByAdress = async (user_uuid) => {
    const user = await customer_details.findByPk(user_uuid, {
        attributes: {
            includes: ['st_default_payment_method_id', 'default_address_uuid'],
        },
    });

    return user;
};

const registerCustomerDetails = async (data) => {
    const user_id = uuid.v4();
    const newUser = await customer_details.create({
        uuid: user_id,
        ...data
    });
    return {
        message: `Customer details created succesfully with the id: ${user_id}`,
        user: newUser,
    };
};


const editCustomerDetails = async (uuid, data) => {
    const user = await customer_details.update(data, {
        where: {
            uuid,
        },
    });
    return {
        message: `Customer details with id: ${uuid} eddited succesfully.`,
        user: user,
    };
};

const getAllAddresses = async (user_uuid) => {
    const users = await customer_addresses.findAll(user_uuid);
    // {
    // attributes: {
    //     exclude: ['password'],
    // },
    // }
    return users;
};

const getAddressById = async (user_uuid) => {
    const user = await customer_addresses.findByPk(
        user_uuid
        //     {
        //     attributes: {
        //         exclude: ['password'],
        //     },
        // }
    );

    return user;
};

const registerCustomerAddress = async (data) => {
    const user_id = uuid.v4();
    const newUser = await customer_addresses.create({
        uuid: user_id,
        ...data,
    });
    return {
        message: `Customer address created succesfully with the id: ${user_id}`,
        user: newUser,
    };
};

const editCustomerAddress = async (user_uuid, data) => {
    const user = await customer_addresses.update(data, {
        where: {
            user_uuid,
        },
    });
    return {
        message: `Customer address with id: ${uuid} eddited succesfully.`,
        user: user,
    };
};

const deleteCustomerAddress = async (user_uuid) => {
    const user = await customer_addresses.destroy({
        where: {
            user_uuid,
        },
    });
    return {
        message: `Customer address with id: ${uuid} deleted succesfully.`,
        user,
    };
};

module.exports = {
    getUserByAdress,
    registerCustomerDetails,
    editCustomerDetails,
    getAllAddresses,
    getAddressById,
    registerCustomerAddress,
    editCustomerAddress,
    deleteCustomerAddress
}