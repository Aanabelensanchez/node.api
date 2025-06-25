import express from 'express';
const app = express();

app.get("/Ping", (req, res) => {
  res.send('Pong');
});

app.get("/", (req, res) => {
  res.send('<h1>Hola Api</h1>');
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});