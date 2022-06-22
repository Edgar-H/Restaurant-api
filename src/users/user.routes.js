const router = require('express').Router();
const userServices = require('./user.http');
const passport = require('passport');
const config = require('../config');

require('../utils/auth')(passport);

router.route('/')
    .get(passport.authenticate('jwt',config.jwtSecret),userServices.getAllUsers)
module.exports = {
    router
}