const { Post } = require('../models');

const postData =
[
    {
      title:"Selling swim trunks",
      images: "Testing",
      post_city: "New York City, NY",
      user_id: 1
    },
    {
      title: "Is anyone interested in an AC/DC shirt?",
      images: "Testing",
      post_city: "Kansas City, MO",
      user_id: 2
    },
    {
      title: "Pair of shoes, brand new",
      images: "testing",
      post_city: "Oklahoma City, OK",
      user_id: 3
    }
  ];
  const seedPosts = () => Post.bulkCreate(postData);

  module.exports = seedPosts;