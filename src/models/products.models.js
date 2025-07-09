
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, "./data/products.json");

let products = [];
if (fs.existsSync(jsonPath)) {
  const jsonData = fs.readFileSync(jsonPath, "utf-8");
  products = JSON.parse(jsonData);
}

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((item) => item.id == id);
};


export const createProduct = (data) => {

const newProduct = {

id: products.length +1,
...data,

};

products.push(newProduct);

fs.writeFileSync(jsonPath, JSON.stringify(products));

return newProduct;

}

export const deleteProduct = (id) => {
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex == -1) {
    return null;
  } else {
    const product = products.splice(productIndex, 1);

    fs.writeFileSync(jsonPath, JSON.stringify(products));

    return product;
  }
};