const userControllers = require('./users.controllers')
// const { toPromise } = require('../utils/toPromise');
const getAllUsers = async (req, res) => {
    if (req.user.rol) {
        res.status(401).json({
            status: 401,
            message: `You dont have clerance`
        })
    }
    if (req.user.rol !== 'admin') {
        res.status(401).json({
            status: 401,
            message: `You dont have clerance`,
        });
    }
    const user = await (userControllers.getAllUsers());
    res.status(200).json(user);
}

module.exports = {
    getAllUsers
}
