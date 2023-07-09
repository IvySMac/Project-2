const router = require('express').Router();
const { Messages } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newMessage = await Messages.create(req.body);

    res.status(200).json(newMessage);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Messages.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedMessage) => {
      res.json(updatedMessage);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const messageData = await Messages.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!messageData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    
    res.status(200).json(messageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
