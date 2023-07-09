const router = require('express').Router();
const {Post} = require('../../models');

  router.post("/", async (req, res) => {
    Post.create(req.body)
    .then((post) => {
      res.status(200).json(post);
      console.log("session creation success");
    })
    .then((postIds) => {
      res.status(200).json(postIds);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
  

  router.put('/:id', (req, res) => {
    
    Post.update(
      {
        title: req.body.title,
        images: req.body.images,
        post_city: req.body.post_city,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });

  router.delete('/:id', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  module.exports = router;