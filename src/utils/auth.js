const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const auth = (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: config.jwtSecret, // debe estar en una variable de entorno
    };
    passport.use(
        new JwtStrategy(opts, (decoded, done) => {
            return done(null, decoded); // decoded sera el que retornaremos cuando se ejecute exitosamente la autenticacion
        })
    );
};

module.exports = auth;
