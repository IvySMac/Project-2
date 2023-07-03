const router = require('express').Router();
const userRoutes = require('./userRoutes');
const messagesRoutes = require('./messagesRoutes');
const productsRoutes =  require('./productsRoutes')

router.use('/user', userRoutes);
router.use('/message', messagesRoutes);
router.use('/products', productsRoutes);

module.exports = router;
