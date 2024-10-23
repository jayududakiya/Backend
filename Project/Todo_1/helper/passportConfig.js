const localStrategy = require('passport-local').Strategy
const User = require('../model/user.model');

exports.initializedPassport = (passport) => {
    passport.use(new localStrategy(async (username , password , done)=> {
        try {
            const user = await User.findOne({username : username});
            if(!user) return done(null , false);
            if(user.password !== password ) return done(null , false);
            return done(null , user);
        } catch (error) {
            done(error,false);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id); // Serialize the user's ID
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id); // Use the correct variable
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    });
};



