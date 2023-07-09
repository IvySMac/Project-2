const { User } = require('../models');

const userData = 
[
  {
    id:1,
    name: "Sal Testing",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    id:2,
    name: "Lernantino Testing",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    id:3,
    name: "Amiko Testing",
    email: "amiko2k20@aol.com",
    password: "password12345",
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
