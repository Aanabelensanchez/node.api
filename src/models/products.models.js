
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

import { collection, getDocs, doc,getDoc, addDoc, deleteDoc,setDoc,updateDoc} from 'firebase/firestore';

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

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await deleteDoc(productRef);
    return true;
  } catch (error) {
    console.error(error);
  }
};

export async function updateProduct(id, productData) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, productData);
    return { id, ...productData };
  } catch (error) {
    console.error(error);
  }
};

export async function partialUpdateProduct(id, updates) {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }

    await setDoc(productRef, updates, { merge: true });

    const updatedDoc = await getDoc(productRef);
    return { id: updatedDoc.id, ...updatedDoc.data() };
  } catch (error) {
    console.error("Error in partialUpdateProduct:", error);
    throw error;
  }
}

