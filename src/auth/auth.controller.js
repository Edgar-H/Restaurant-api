const userControllers = require('../users/users.controllers');
const crypto = require('../utils/crypto');
const { generateToken } = require('../utils/generateToken');
const { toPromise } = require('../utils/toPromise');
const {verify_tokens} = require('../models/init-models').initModels()


const createToken = async (userId) => {
    const newToken = await verify_tokens.create( {
        token: generateToken,
        user_id: userId,
        used: false
    })
    return newToken
}

const verifiedToken = async (id) => {
    const user = await verify_tokens.update({
        used: true
    }, {
        where: {
            id,
        },
    });
    return {
        message: `Token with id: ${id} verified succesfully.`,
        user: user,
    };
}
const checkUserCredential = async (email, password) => {
    const [user, error] = await toPromise(
        userControllers.getUserByEmail(email)
    );
    if (!error && user) {
        return crypto.comparePassword(password, user.password);
    } else {
        return null;
    }
};

module.exports = {
    checkUserCredential,
    createToken,
    verifiedToken,
};
