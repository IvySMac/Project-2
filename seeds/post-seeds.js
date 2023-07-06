const { Post } = require('../models');

const postData =
[
    {
      id:1,
      title:"Music Near Me",
      content:"A mobile app that will send you notifications whenever a concert is playing in your area.",
      user_id: 1
      ,images: "Testing"
      ,post_city: "Testing"
    }// ,
    // {
    //   id:2,
    //   title: "The Ultimate Tech Quiz",
    //   content: "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
    //   user_id: 2
    //   ,images: "Testing"
    //   ,post_city: "Testing"
    // },
    // {
    //   id:3,
    //   title: "Roll 'Em Up",
    //   content: "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    //   user_id: 3
    //   ,images: "Testing"
    //   ,post_city: "Testing"
    // },
    // {
    //   id:4,
    //   title: "Test Title",
    //   content: "This is a test post",
    //   user_id: 4
    //   ,images: "Testing"
    //   ,post_city: "Testing"
    // },
    // {
    //   id:5,
    //   title: "Test Title Number 2",
    //   content: "This is just another test post",
    //   user_id: 4
    //   ,images: "Testing"
    //   ,post_city: "Testing"
    // }
  ];
  const seedPosts = () => Post.bulkCreate(postData);

  module.exports = seedPosts;