import * as model from "../models/products.models.js";

export const getAllProducts = async (req, res) => {
  res.json( await model.getAllProducts());
};
export const searchProduct = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Falta el parámetro 'name'" });
  }

  const filteredProducts = model.filterProducts(name);
  res.json(filteredProducts);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};


export const createProduct = (req, res) => {
  const { name,price } = req.body;
  const newProduct = model.createProduct ( {name, price} ); 
  res.status(201).json(newProduct);
};


export const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = model.deleteProduct(productId);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.status(204).send();
};