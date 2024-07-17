const express = require("express");
const { Product, Image } = require('../models');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Image,
          as: 'Images', 
          limit: 3,
        },
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Image,
          as: 'Images', 
          limit: 3,
        },
      ],
    });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

router.post('/', async (req, res) => {
  const { name, description, imageUrl, price, Images } = req.body;

  try {

    const newProduct = await Product.create({
      name,
      description,
      imageUrl,
      price,
    });


    if (Images && Array.isArray(Images)) {
      await Promise.all(Images.map(async (image) => {
        await Image.create({
          url: image.url,
          productId: newProduct.id,
        });
      }));
    }


    const productWithImages = await Product.findByPk(newProduct.id, {
      include: [{
        model: Image,
        as: 'Images', 
      }],
    });

 
    res.status(201).json(productWithImages);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, description, imageUrl, price } = req.body;
    const [updated] = await Product.update(
      { name, description, imageUrl, price },
      { where: { id: req.params.id } }
    );

    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id, {
        include: [{
          model: Image,
          as: 'Images', 
        }],
      });
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: {},
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Produto não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
});

module.exports = router;
