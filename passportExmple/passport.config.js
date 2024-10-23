const localStrategy = require('passport-local').Strategy
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('./model/passportUser.model');

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


exports.initializedGoogleStrategy = (passport) => {
    passport.use(new GoogleStrategy({
        clientID:     process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost/5000/auth/google/callback",
        passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

    passport.serializeUser((user,done)=>{
        done(null,user);
    });

    passport.deserializeUser( async (user, done) => {
        try {
            const user = await User.findById(id); // Use the correct variable
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    });
}



