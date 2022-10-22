module.exports = {
    development: {
        username: 'postgres',
        password: 'bfix4038.,',
        database: 'restaurant',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
