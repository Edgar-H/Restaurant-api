//!DEPENDENCIAS
const  uuid = require('uuid')
const crypto = require('../utils/crypto')
const users = require('../models/init-models').initModels().users


//CUALQUIER USUARIO
const registerUser = async (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const user_id = uuid.v4();
    const newUser = await users.create({
        uuid: user_id,
        ...data,
        password: hashedPassword,
        role_id: 1
    });
    return {
        message: `User created succesfully with the id: ${user_id}`,
        user: newUser,
    };
};

// SOLO LOS ADMINS
const getAllUsers = async () => {
    const users = await users.findAll({
        attributes: {
            exclude: ["password"]
        }
    })
    return users
}

// SOLO LOS ADMINS
const getUserById = async (id) => {
    const user = await users.findByPk(id,
            {attributes: {
            exclude: ["password"]
        }})
    
    return user
}

// CLIENTES Y ADMINISTRADORES

const deleteUser = async (id) => {
    const user = await users.destroy({
        where: {
            id,
        },
    });
    return {
        message: `User with id: ${id} deleted succesfully.`,
        user,
    };
};

//!FORMA ANTERIOR
// const deleteUser = async (id) => {
//     const index = await models.users.findIndex((item) => item.id === id);
//     models.users.splice(index, 1);
//     return;
// } 

// CUALQUIER ROL

const editUser = async (id, data) => {
    const user = await users.update(data,{
        where: {
            id
        }
    })
    return {
        message: `User with id: ${id} eddited succesfully.`,
        user: user
    }
}

//!FORMA ANTERIOR
// const editUser = (id, data) => {
//     const index = models.users.findIndex((item) => item.id === id);
//     if (index !== -1) {
//         models.users[index] = {
//             id,
//             ...data,
//             password: data.password,
//             active: data.active,
//         };
//     } else {
//         registerUser(data);
//     }
//     return;
// }

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
    deleteUser,
    editUser
};
// await modeloEquipo.update({
// body_a_actualizar:asdasdasd}, {
//     where: {
//         id: id,
//     }
// });
/*models.User.destroy({
  where: {id}
 })
 */