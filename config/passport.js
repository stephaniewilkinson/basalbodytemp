var passport = require('passport');
// add oauth strategy
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  // verify callback
  function(accessToken, refreshToken, profile, cb) {
    // find user if it exists
    // if users doesn't exist create user
    console.log(profile);
    User.findOne({ providerId: profile.id}, function(err, user){
      if (err)  { return cb(err) };
      if (user) { return cb(null, user)};
      var newUser = new User({
        name: profile.displayName,
        providerId: profile.id
      });
      newUser.save(function(err){
        if (err) { return cb(err) };
        return cb(null, newUser);
      });
    });

  }
));

// configure serializeUser
// putting user id in session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// configure deserializeUser
// finds user via session id
// and attaches it to req
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
