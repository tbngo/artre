const User = require("./models/User");
const TwitterStrategy = require("passport-twitter");

module.exports = (passport) => {
  const callbackURL =
    process.env.NODE_ENV === "production"
      ? "https://my-app.herokuapp.com/auth/twitter/callback"
      : "http://localhost:5000/auth/twitter/callback";

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost:5000/auth/twitter/callback",
        includeEmail: true,
      },
      (req, token, tokenSecret, profile, done) => {
        const { id, email, username } = profile;
        User.findOne({ user_id: id }, async (err, user) => {
          if (err) throw err;
          if (user) {
            // User exists
            return done(null, user);
          } else {
            // User does not exist in database yet
            const newUser = new User({
              user_id: id,
              email: email,
              screen_name: username,
            });
            await newUser.save();
            return done(null, newUser);
          }
        });
      }
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
