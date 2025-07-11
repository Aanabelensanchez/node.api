
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

import { db } from '../models/data/firebase.js';

import { collection, getDocs, doc,getDoc } from 'firebase/firestore';

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};


export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
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