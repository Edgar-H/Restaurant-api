const userControllers = require('./users.controllers')
const { toPromise } = require('../utils/toPromise');
const config = require('../config')
// todo:
//? get /users ADMIN
//? get /users/:id ADMIN
//? delete /users/me CLIENTE
//? delete /users/:id ADMIN
//? put-patch /users/me CLIENTE USUARIO
//? put-patch /users/:id ADMIN

// /auth/login
// /auth/signin
// /auth/reset-password
// /auth/reset-token
// /auth/verify-account

const getAllUsers = async (req, res) => {
   //!cambiar por authAdmin en dado caso
    const user = await toPromise(
        userControllers.paginatedUser()
    );
    res.status(200).json({
            _links: {
                "base": `${config.domainHost}${config.port}/users`,
                "next": '/page?limit=5&start=5',
                "prev": ""
                // self: 'http://localhost:8080/directors/page'
        },
        results: user
        });
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const [users, error] = await toPromise(userControllers.getUserById(id));
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json(users);
};

const getMyUserData = async (req, res) => {
    console.log(req);
    const [users, error] = await toPromise(userControllers.getUserById)
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json({ message: 'all good' });
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const [users, error] = await toPromise(userControllers.deleteUser(id));
    if (error || !users) {
        res.status(400).json({ message: 'Try with another id' });
    }
    res.status(200).json({ message: 'all good' });
}



module.exports = {
    getAllUsers,
    getUserById,
    getMyUserData,
    deleteUser
}
