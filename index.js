import express from 'express';
const app = express();
import cors from "cors";

app.get("/Ping", (req, res) => {
  res.send('Pong');
});

app.use(cors());
app.use(express.json());

import productsRouter from './src/routes/products.router.js';
app.use(productsRouter);

app.use((req,res,next)=>{
 res.status(404).send('Recurso no encontrado');
} );


app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});