const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));


const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

let userProfile;

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});



const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = "585778916374-gqoboaih37s12pvmqhvvbija0dqphrqt.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/oauth/google"
  },

  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));

// app.get('/', function(req, res) {
//   res.render('pages/auth');
// });

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/api/oauth/google', 
  passport.authenticate('google'),
  function(req, res) {

    // create a user profile from the data gotten from the google account to use and create a user in your system.
    const userInfo = {
        id: userProfile.id,
        name: userProfile.displayName,
        email: userProfile.emails[0].value,
        avatar: userProfile.photos[0].value
    }

    res.send(userInfo)
    return userInfo

  });



const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port)); 
