import axios from "axios";

export async function getAllProducts() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (e) {
    console.error("Error", e);
    return {
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }
};

export async function getProduct(id) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (e) {
    console.error("Error", e);
    return null;
  }
};
