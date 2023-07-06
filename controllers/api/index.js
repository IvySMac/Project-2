const router = require('express').Router();
const userRoutes = require('./userRoutes');
const messagesRoutes = require('./messagesRoutes');
const productsRoutes =  require('./productsRoutes');
const postRoutes = require('./postRoutes');

router.use('/user', userRoutes);
router.use('/message', messagesRoutes);
router.use('/products', productsRoutes);
router.use('/post',postRoutes);

module.exports = router;
