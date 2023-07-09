const sequelize = require('../config/connection');
const seedProducts = require('./product-seeds');
const seedPosts = require('./post-seeds')
const seedMessages = require('./message-seeds')
const seedThreads = require('./thread-seeds')
const userData = require('./user-seeds')



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await userData();
  console.log('\n----- UserData SYNCED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedMessages();
  console.log('\n----- MESSAGES SEEDED -----\n');

  await seedThreads();
  console.log('\n----- MESSAGES SEEDED -----\n');

  process.exit(0);
};

seedAll();