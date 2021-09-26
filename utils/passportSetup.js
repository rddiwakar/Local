const passport = require("passport");
const User = require("../model/user");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/oAuth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    const data = {
      email: profile._json.email,
      username: profile.displayName,
    }

    const foundUser = await User.findOne({email: data.email});

    if(foundUser) {
      cb(null, foundUser);
    } else {
      const user = await User.create(data);
      cb(null, user);
    }
  }
));