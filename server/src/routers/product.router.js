const express = require("express");
const Product = require("../models/product");
const router = new express.Router();

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.status(201).send(product);
  } catch (e) {
    return res.status(401).send();
  }
});
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status.send(e);
  }
});
router.patch("/", async (req, res) => {});
router.get("/", async (req, res) => {});

module.exports = router;
