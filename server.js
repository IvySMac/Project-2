const express = require('express');
// const path = require('path');
const session = require('express-session');
const path = require('path');
const handlebars = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'handlebars');
app.engine(
  'handlebars',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
  })
);
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('homepage');
});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const index = require('./routes/index');
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
