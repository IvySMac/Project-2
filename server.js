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

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index', products:fakeApi()});
});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const index = require('./routes/index');
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

function fakeApi() {
  return [
    {
      isMen: true,
      imageSrc: 'womens-green-sweater.jpg',
      title: 'cool shirt',
      description: 'has a tear.',
      price: '35',
      commentBox: [
        {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
      ]
    },
  //2
  {
      imageSrc: 'womens-white-pants.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45',
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ],
    isMen: true
  },
  //3
  {
      imageSrc: 'womens-pink-sweater.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //4
  {
      imageSrc: 'womens-pink-shirt.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //5
  {
      imageSrc: 'womens-pink-shoes.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //6
  {
      imageSrc: 'womens-tan-jacket.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //7
  {
      imageSrc: 'womens-green-dress.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //8
  {
      imageSrc: 'womens-grey-vest.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  }, 
  //9
  {
      imageSrc: 'womens-tan.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },  comma or no?



  //1 mens
  {
      imageSrc: 'mens-black-shirt.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //2
  {
      imageSrc: 'mens-orange-jacket.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //3
  {
      imageSrc: 'mens-black-shoes.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //4
  {
      imageSrc: 'mens-jean-jacket.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //5
  {
      imageSrc: 'mens-white-shirt.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //6
  {
      imageSrc: 'mens-green-shirt.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //7
  {
      imageSrc: 'mens-white-shoes.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //8
  {
      imageSrc: 'mens-jeanshorts.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //9
  {
      imageSrc: 'mens-blue-shoes.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  }, comma or no?

  //1 kids
  {
      imageSrc: 'kids-orange.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //2
  {
      imageSrc: 'kids-orange.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //3
  {
      imageSrc: 'kids-tan.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //4
  {
      imageSrc: 'kids-plaid.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //5
  {
      imageSrc: 'kids-swimsuit.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //6
  {
      imageSrc: 'kids-flipflopki.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //7
  {
      imageSrc: 'kids-onsie.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //8
  {
      imageSrc: 'kids-pink-shoes.jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  },
  //9
  {
      imageSrc: 'kids-green-shoes..jpg',
      title: 'cool shirt',
    description: 'has a tear.',
    price: '45'
    commentBox: [
      {
          text: 'looks great, still available?',
          user: 'coolbro00'
        }
    ]
  }
  ];
}