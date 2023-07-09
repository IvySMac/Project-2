const router = require('express').Router();
const { Thread } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const threadData = await Thread.findAll({
    });
    
    const thread = threadData.map((data)=>data.get({plain:true}))
    console.log(message);
    res.status(200).json(thread)
    // render('homepage', threads)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const threadData = await Thread.findByPk(req.params.id, {
    });
  
    if (!threadData) {
      res.status(404).json({ message: "No product found with that id!" });
      return;
    }

    res.status(200).json(threadData);
    // render('homepage', products)
   } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  Thread.create(req.body)
    .then((thread) => {
      res.status(200).json(thread);
      console.log("session creation success");
    })
    .then((threadIds) => {
      res.status(200).json(threadIds);
    })
    .catch((err) => {
      console.log(err);
       res.status(400).json(err);
    });
  });


router.delete('/:id', async (req, res) => {
  try {
    const threadData = await Thread.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!threadData) {
      res.status(404).json({ message: 'No message found with this id!' });
      return;
    }

    res.status(200).json(threadData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
