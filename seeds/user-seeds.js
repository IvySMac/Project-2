const { User } = require('../models');

const userData = 
[
  {
    id:1,
    first_name: "Sal",
    last_name:"Testing",
    email: "sal@hotmail.com",
    password: "password12345"
  },
  {
    id:2,
    first_name: "Lernantino",
    last_name:"Testing",
    email: "lernantino@gmail.com",
    password: "password12345"
  },
  {
    id:3,
    first_name: "Amiko",
    last_name:"Testing",
    email: "amiko2k20@aol.com",
    password: "password12345",
  }
]
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
