const router = require('express').Router();
const {Product} = require('../../models');

router.post("/", async (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.status(200).json(product);
      console.log("session creation success");
    })
    .then((productIds) => {
      res.status(200).json(productIds);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
  

router.put('/:id', (req, res) => {
      Product.update(
    {
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
    },
    {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });
  
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
  
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  
module.exports = router;