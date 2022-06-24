const router = require('express').Router();
const passport = require('passport');
const config = require('../config');
const { authAdmin } = require('../middleware/authAdmin');
const customerServices = require('./customer.http')

router
    .route('/:uuid')
    .put(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.putNewDetail
    );
router
    .route('/:uuid/address')
    .get(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.getAllAddresses
    )
    .post(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.postNewAddress
    );

router
    .route('/:uuid/address/:uuid')
    .get(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.getAddressById
    )
    .put(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.putNewAddress
    )
    .delete(
        passport.authenticate('jwt', config.jwtSecret),
        authAdmin,
        customerServices.deleteAddress
    );

module.exports = {
    router
}