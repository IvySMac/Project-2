const router = require('express').Router();
const userRoutes = require('./userRoutes');
const messagesRoutes = require('./messagesRoutes');

router.use('/users', userRoutes);
router.use('/message', messagesRoutes);

module.exports = router;
