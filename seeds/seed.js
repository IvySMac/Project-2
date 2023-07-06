// const sequelize = require('../config/connection');
// const { User, Product} = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();

const sequelize = require('../config/connection');
const seedProducts = require('./product-seeds');
const seedPosts = require('./post-seeds')
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

  process.exit(0);
};

seedAll();