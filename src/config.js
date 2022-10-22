const dotenv = require('dotenv');
dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    node_env: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    domainHost: process.env.DOMAIN_HOST || 'localhost',
};

module.exports = config;
