const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../models/Admin');
const keys = require('./keys');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.JWTSecret;

module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        Admin.findOne({_id: jwt_payload.id})
            .then(admin => {    
                if (admin) {
                    return done(null, admin);
                } 
                else {
                    return done(null, false);
                }
            })
            .catch(err => {
                return done(err, false);
            });
    }));
}