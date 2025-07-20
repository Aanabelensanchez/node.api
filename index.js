import 'dotenv/config';
import express from 'express';
const app = express();
import cors from "cors";


app.use(cors());
app.use(express.json());
 

app.get("/Ping", (req, res) => {
  res.send('Pong');
});

import productsRoutes from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.router.js';  

app.use('/api',productsRoutes);
app.use('/api', authRoutes);


app.use((req,res,next)=>{
 res.status(404).send('Recurso no encontrado');
} );

const PORT = process.env.PORT || 3001;

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});