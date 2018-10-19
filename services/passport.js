const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/key.js');
//a handle to the mongodb
//require('../models/User');
const User = mongoose.model('users');

//an arrow function is passed to the serializeUser
//user is a mongoose instance
passport.serializeUser((user, done)=>{
    //first argument of done is an erro obj
    //thie user.id is created by mongodb, not the googleID we used in google Oauth
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    //anytime attempting to connect to database
    //it is a async action
    //there's a "promise"....it's been updated
    User.findOne({googleID: profile.id})
        .then((existingUser) => {
            if(existingUser){
                //already have an user with the same id
                done(null,existingUser);
            }else{
                //new mongoose instance
                new User({googleID: profile.id})
                    .save()
                    .then(user => done(null, user));

            }
        });
}));