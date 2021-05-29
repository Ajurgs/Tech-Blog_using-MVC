const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const app = express();
const routes = require("./controllers");
const PORT = process.env.PORT || 3001;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// middleware
app.use(session(sess));
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("vier engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// start server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
