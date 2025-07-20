import { Router } from "express";
import { getAllProducts, searchProduct, getProductById, createProduct,deleteProduct, updateProductController, partialUpdateProductController } from "../controllers/products.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send('<h1>Hola Api</h1>');
});
 
/*  Elegi la segunda opcion que menciono el profe en la clase 15- Minuto 49  */ 
import { auth } from "../middlewares/auth.middleware.js";


router.get("/products", getAllProducts);
router.get("/products/search", searchProduct)
router.get("/products/:id", auth, getProductById);
router.post("/products", auth, createProduct);
router.delete("/products/:id", deleteProduct); 
router.put('/products/:id', updateProductController);
router.patch('/products/:id/partial-update', partialUpdateProductController);

export default router;
