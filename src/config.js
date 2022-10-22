require('dotenv').config({ path: './config.env' });

module.exports = {
    port: process.env.PORT || 5000,
    node_env: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    domainHost: process.env.DOMAIN_HOST || 'http://localhost:',
};
