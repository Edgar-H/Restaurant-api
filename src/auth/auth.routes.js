const router = require('express').Router();
const authServices = require('./auth.http')

router.route('/token').get(authServices.verifyAccount)
router.route('/signup').post(authServices.addUser);
router.route('/login').post(authServices.loginUser)

module.exports = {
    router
}