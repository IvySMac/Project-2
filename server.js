const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = handlebars.create({});

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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


function fakeApi() {
  return [
    {
      isWomens: true,
      imageSrc: 'womens-green-sweater.jpg',
      title: 'sweater',
      description: 'has a tear.',
      price: '50',
      commentBox: [
        {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
      ]
    },
  //2
  {
    isWomens: true,
    imageSrc: 'womens-white-pants.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //3
  {
    isWomens: true,
    imageSrc: 'womens-pink-sweater.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //4
  {
    isWomens: true,
    imageSrc: 'womens-pink-shirt.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //5
  {
    isWomens: true,
    imageSrc: 'womens-pink-shoes.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //6
  {
    isWomens: true,
    imageSrc: 'womens-tan-jacket.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //7
  {
    isWomens: true,
    imageSrc: 'womens-green-dress.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //8
  {
    isWomens: true,
    imageSrc: 'womens-grey-vest.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  }, 
  //9
  {
    isWomens: true,
    imageSrc: 'womens-tan.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  {
    isMens: true,
    imageSrc: 'mens-black-shirt.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //2
  {
    isMens: true,
    imageSrc: 'mens-orange-jacket.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //3
  {
    isMens: true,
    imageSrc: 'mens-black-shoes.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //4
  {
    isMens: true,
    imageSrc: 'mens-jean-jacket.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //5
  {
    isMens: true,
    imageSrc: 'mens-white-shirt.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //6
  {
    isMens: true,
    imageSrc: 'mens-green-shirt.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //7
  {
    isMens: true,
    imageSrc: 'mens-white-shoes.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //8
    {
      isMens: true,
      imageSrc: 'mens-jeanshorts.jpg',
      title: 'cool shirt',
      description: 'has a tear.',
      price: '45',
      commentBox: [
        {
            text: 'looks great, still available?',
            user: 'coolbro00'
          }
      ]
    },
  //9
  {
    isMens: true,
    imageSrc: 'mens-blue-shoes.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },

  //1 kids
  {
    isKids: true,
    imageSrc: 'kids-orange.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //2
  {
    isKids: true,
    imageSrc: 'kids-shorts.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //3
  {
    isKids: true,
    imageSrc: 'kids-tan.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //4
  {
    isKids: true,
    imageSrc: 'kids-plaid.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //5
    {
      isKids: true,
      imageSrc: 'kids-swimsuit.jpg',
      title: 'cool shirt',
      description: 'has a tear.',
      price: '45',
      commentBox: [
        {
            text: 'looks great, still available?',
            user: 'coolbro00'
          }
      ]
    },
  //6
  {
    isKids: true,
    imageSrc: 'kids-flipflop.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //7
  {
    isKids: true,
    imageSrc: 'kids-onsie.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //8
  {
    isKids: true,
    imageSrc: 'kids-pink-shoes.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //9
  {
    isKids: true,
    imageSrc: 'kids-green-shoes.jpg',
    title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  }
  ];
}
