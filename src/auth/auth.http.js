const authControllers = require('./auth.controller');
const userControllers = require('../users/users.controllers');
const jwt = require('jsonwebtoken');
const config = require('../config');
const uuid = require('uuid');
const crypto = require('../utils/crypto');
const sequelize = require('../models/index').sequelize;
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const { toPromise } = require('../utils/toPromise');

const loginUser = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Missing data' });
    } else if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Missing data' });
    }
    const [response, error] = await toPromise(
        authControllers.checkUserCredential(req.body.email, req.body.password)
    );

    if (error || !response) {
        return res.status(401).json({ message: 'Invalid Credential' });
    }
    const [user, err] = await toPromise(
        userControllers.getUserByEmail(req.body.email)
    );

    if (err || !response) {
        return res.status(401).json({ message: 'Invalid Credential' });
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: req.body.email,
        },
        config.jwtSecret
    );
    res.status(200).json({ token: token });
};

const registerUser = async (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const user_id = uuid.v4();
    const newUser = await models.users.create({
        id: user_id,
        ...data,
        password: hashedPassword,
    });
    return {
        message: `User created succesfully with the id: ${user_id}`,
        user: newUser,
    };
};

module.exports = {
    loginUser,
    registerUser
};
