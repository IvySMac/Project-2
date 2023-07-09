const router = require('express').Router();
const {Post} = require('../../models');

router.post("/", async (req, res) => {
  try {
    const postData = Post.create(req.body);

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json({"error message": error});
  }
});

router.put('/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
      description: req.body.description,
      images: req.body.images,
      post_city:req.body.post_city
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
