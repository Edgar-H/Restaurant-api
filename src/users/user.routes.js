const router = require('express').Router();
const userServices = require('./user.http');
const passport = require('passport');
const config = require('../config');
const customerServices = require('../customers/customer.http');
const { authAdmin } = require('../middleware/authAdmin');


require('../utils/auth')(passport);

router.route('/')
    .get(passport.authenticate('jwt',config.jwtSecret), authAdmin,userServices.getAllUsers)

router
    .route('/:uuid/customer')
    .get(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.getMyAddressData
    )
    .post(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.postNewDetail
    );

module.exports = {
    router
}