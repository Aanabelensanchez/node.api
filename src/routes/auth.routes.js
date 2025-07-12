import { Router } from "express";
import { SearchCredencial } from "../controllers/products.controller.js";
const router = Router();


router.post("/auth/login", SearchCredencial);


export default router;
