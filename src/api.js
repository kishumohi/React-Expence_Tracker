// src/api.js
import axios from "axios";
import data_get from "./assets/assets.js";

const API_URL = data_get.products; //"https://dummyjson.com/products";

export const fetchProducts = () => {
  const response = API_URL; //await axios.get(API_URL);
  return response;
  //   return response.data.products;
};
