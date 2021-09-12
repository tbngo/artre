const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const cors = require("cors");

const User = require("./models/User");
process.env.NODE_ENV = "dev";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.use(
  cors({
    origin: process.env.NODE_ENV === "dev" ? "*" : process.env.FRONTEND_HOST,
    credentials: true,
  })
);
app.use(morgan("common"));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/twitter/callback
app.get("/auth/twitter", passport.authenticate("twitter"));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    failureRedirect: "/",
    session: true,
  }),
  (req, res) => {
    return res.redirect("http://localhost:3000/");
  }
);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
