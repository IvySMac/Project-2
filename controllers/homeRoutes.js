const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req,res) => {
    try {
        const productData = await Product.findAll({});

        const products = productData.map((data) => data.get({plain: true}));
        console.log(products)
        res.render('homepage', {
            products: fakeApi(),
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
});
  
module.exports = router;

function fakeApi() {
    return [
      {
        isWomens: true,
        imageSrc: 'womens-green-sweater.jpg',
        title: 'Sweater',
        description: 'Has a small tear in arm.',
        price: '25',
        commentBox: [
          {
            text: 'Looks great, still available?',
            user: 'Sasha02'
          }
        ]
      },
    //2
    {
      isWomens: true,
      imageSrc: 'womens-white-pants.jpg',
      title: 'Pants',
      description: 'Very comfortable easy to dress up or down!',
      price: '45',
      commentBox: [
        {
            text: 'So cute! Would you take 35?',
            user: 'Julio00'
          }
      ]
    },
    //3
    {
      isWomens: true,
      imageSrc: 'womens-pink-sweater.jpg',
      title: 'Sweater',
      description: 'Brand new with tags.',
      price: '35',
      commentBox: [
        {
            text: 'Is this still available?',
            user: 'TS1989'
          }
      ]
    },
    //4
    {
      isWomens: true,
      imageSrc: 'womens-pink-shirt.jpg',
      title: 'Shirt',
      description: 'Casual and soft!',
      price: '20',
      commentBox: [
        {
            text: 
            user: 
          }
      ]
    },
    //5
    {
      isWomens: true,
      imageSrc: 'womens-pink-shoes.jpg',
      title: 'Shoes',
      description: 'Only worn once!',
      price: '50',
      commentBox: [
        {
            text: 'Are they comfortable?',
            user: 'Jess101'
          }
      ]
    },
    //6
    {
      isWomens: true,
      imageSrc: 'womens-tan-jacket.jpg',
      title: 'Jacket',
      description: 'Great fit, very professional.',
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
      title: 'Dress',
      description: 'Casual and good for any occasion!',
      price: '15',
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
      title: 'Vest',
      description: 'Never worn.',
      price: '30',
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
      title: 'Shirt',
      description: 'A great basic for any wardrobe!',
      price: '10',
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
      title: 'Jacket',
      description: 'Slightly worn.',
      price: '35',
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
      title: 'Shoes',
      description: 'A little scuffed up.',
      price: '20',
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
      title: 'Jacket',
      description: 'Barley worn.',
      price: '35',
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
      title: 'Shirt',
      description: 'Everday casual and very soft.',
      price: '15',
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
      title: 'Shirt',
      description: 'Fun color and good condition.',
      price: '10',
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
      title: 'Shoes',
      description: 'Time for someone else to walk in my shoes!',
      price: '25',
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
        title: 'Shorts',
        description: 'Good quality.',
        price: '30',
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
      title: 'Shoes',
      description: 'Still in their box.',
      price: '40',
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
      title: 'Overalls',
      description: 'Only worn once',
      price: '15',
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
      title: 'Shorts',
      description: 'Great for little ones!',
      price: '5',
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
      title: 'Overalls',
      description: 'New with tags.',
      price: '20',
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
      title: 'Shoes',
      description: 'Plaid print and soft!',
      price: '15',
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
        title: 'Shorts',
        description: 'Very fun print!',
        price: '10',
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
      title: 'Shoes',
      description: 'Easy to slip on shoe!',
      price: '5',
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
      title: 'Onsie',
      description: 'Very soft.',
      price: '10',
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
      title: 'Shoes',
      description: 'Casual summertime shoe!',
      price: '15',
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
      title: 'Shoes',
      description: 'Adorable and practical!',
      price: '5',
      commentBox: [
        {
            text: 'looks great, still available?',
            user: 'coolbro00'
          }
      ]
    }
    ];
  }
  

