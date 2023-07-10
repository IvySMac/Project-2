const router = require('express').Router();
const userRoutes = require('./userRoutes');
const messagesRoutes = require('./messagesRoutes');
const productsRoutes =  require('./productsRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/messages', messagesRoutes);
router.use('/products', productsRoutes);
router.use('/posts',postRoutes);

module.exports = router;
