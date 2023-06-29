const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', function (req, res, next) {
    res.render('index', 
        { 
            title: 'NodeJS Shopping Cart',
            products: [
                {
                  "id": 1,
                  "title": "Apples",
                  "description": "Apples are <span class=\"label label-info\">25 CHF each</span>",
                  "price": 25
                },
                {
                  "id": 2,
                  "title": "Oranges",
                  "description": "Oranges are <span class=\"label label-info\">30 CHF each</span>",
                  "price": 30
                },
                {
                  "id": 3,
                  "title": "Garlic",
                  "description": "Garlic are <span class=\"label label-info\">15 CHF each</span>",
                  "price": 15
                }],
        }
    );
});

module.exports = router;
