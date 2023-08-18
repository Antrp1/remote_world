const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers/index");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
  secret: "Super secret secret",
  cookie: {
    // 5 days
    maxAge: 5 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});