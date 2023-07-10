const { Thread } = require('../models');

const threadData = [
  {
    id: 1,
    text: "Hey, is this still available?",
  },
  {
    id: 2,
    text: "Can this be delivered?",
  },
];

const seedThreads = () => Thread.bulkCreate(threadData);

module.exports = seedThreads;