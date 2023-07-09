const { Post } = require('../models');

const postData =
[
    {
      title:"Selling swim trunks",
      description: "Never been worn swim trunks from Old Navy. They don't fit. Looking to sell",
      images: "Testing",
      post_city: "New York City, NY",
      user_id: 1
    },
    {
      title: "Is anyone interested in an AC/DC shirt?",
      description: "A AC/DC concert shirt, lightly used. There are a few holes in the trim but otherwise in good condition!",
      images: "Testing",
      post_city: "Kansas City, MO",
      user_id: 2
    },
    {
      title: "Pair of shoes, brand new",
      description: "Red Nike shoes, size 9. Comes in original shoebox",
      images: "testing",
      post_city: "Oklahoma City, OK",
      user_id: 3
    }
  ];
  const seedPosts = () => Post.bulkCreate(postData);

  module.exports = seedPosts;