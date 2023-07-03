const router = require('express').Router();
const {Product} = require('../../models');

router.get("/", async (req, res) => {
  
    try {
      const productData = await Product.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.get("/:id", async (req, res) => {

    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [{ model: Product}],
      });
  
      if (!productData) {
        res.status(404).json({ message: "No product found with that id!" });
        return;
      }
  
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;