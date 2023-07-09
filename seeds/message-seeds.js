const { Message } = require('../models');

const messageData = [
  {
    id: 1,
    text: "Hey, is this still available?",
  },
  {
    id: 2,
    text: "Can this be delivered?",
  },
];

const seedMessages = () => Message.bulkCreate(messageData);

module.exports = seedMessages;