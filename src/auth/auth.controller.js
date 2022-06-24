const userControllers = require('../users/users.controllers');
const crypto = require('../utils/crypto');
const { toPromise } = require('../utils/toPromise');

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
};
