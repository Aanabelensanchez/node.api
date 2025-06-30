import { Router } from "express";
import { getAllProducts, searchProduct, getProductById } from "../controllers/products.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send('<h1>Hola Api</h1>');
});



router.get("/products", getAllProducts);
router.get("/products/search", searchProduct)
router.get("/products/:id", getProductById);


export default router;
