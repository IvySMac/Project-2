const router = require('express').Router();
const { Message } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const messageData = await Message.findAll({
    });
    
    const message = messageData.map((data)=>data.get({plain:true}))
    console.log(message);
    res.status(200).json(message)
    // render('homepage', products)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const messageData = await Message.findByPk(req.params.id, {
    });
  
    if (!messageData) {
      res.status(404).json({ message: "No product found with that id!" });
      return;
    }

    res.status(200).json(messageData);
    // render('homepage', products)
   } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', (req, res) => {
    
  Post.update(
    {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
=======
router.post("/", async (req, res) => {
  Message.create(req.body)
    .then((message) => {
      res.status(200).json(message);
      console.log("session creation success");
    })
    .then((messageIds) => {
      res.status(200).json(messageIds);
    })
    .catch((err) => {
      console.log(err);
       res.status(400).json(err);
    });
  });

router.put('/:id', (req, res) => {
    
  Message.update(
    {
      text: req.body.text,

    },
    {
      where: {
        id: req.params.id,
      },
    }
  )

    .then((updatedPost) => {
      res.json(updatedPost);
=======
    .then((updatedProduct) => {
      res.json(updatedProduct);

    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


=======

router.delete('/:id', async (req, res) => {
  try {
    const messageData = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!messageData) {
      res.status(404).json({ message: 'No message found with this id!' });
      return;
    }

    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
