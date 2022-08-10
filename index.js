const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

// app.get('/', function(req, res) {
//   res.render('pages/auth');
// });

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port)); 


const passport = require('passport');
let userProfile;

app.use(passport.initialize());
app.use(passport.session());

// app.set('view engine', 'ejs');

// app.get('/success', (req, res) => res.send(userProfile));
// app.get('/error', (req, res) => res.send("error logging in"));

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
 

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get('/api/oauth/google', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.

    const userInfo = {
        id: userProfile.id,
        name: userProfile.displayName,
        email: userProfile.emails[0].value,
        avatar: userProfile.photos[0].value
    }
    console.log(userInfo)
    // res.send(userInfo)
    return userInfo
  });
