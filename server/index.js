const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const grant = require("grant").express();

const app = express();

const PORT = process.env.PORT || 3000;

app
  .use(session({ secret: "grant", saveUninitialized: true, resave: false }))
  .use("/connect/twitter", (req, res, next) => {
    res.locals.grant = {
      dynamic: {
        key: process.env.TWITTER_CONSUMER_KEY,
        secret: process.env.TWITTER_CONSUMER_SECRET,
      },
    };
    next();
  })
  .use(grant(require("./config.json")))
  .get("/hi", (req, res) => {
    res.end(JSON.stringify(req.session.grant.response, null, 2));
  });

dotenv.config();
/*
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
*/

app.use(express.json());
app.use(morgan("common"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
