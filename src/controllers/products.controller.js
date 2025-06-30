
const products = [
{ id:1, nombre: "Producto 1", Precio: 10.0, cantidad: 100 },
{ id:2, nombre: "Producto 2", Precio: 15.0, cantidad: 200 },
{ id:3, nombre: "Producto 3", Precio: 20.0, cantidad: 300 },
]

import * as service from "../services/products.service.js";

export const getAllProducts = (req, res) => {
  res.json(service.getAllProducts());
};

export const searchProduct = (req, res) => {
  const { name } = req.query;

  const products = service.getAllProducts();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
};

export const getProductById = (req, res) => {
  const { id } = req.params;

  const product = service.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};