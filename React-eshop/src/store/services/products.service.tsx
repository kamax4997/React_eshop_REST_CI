// import { PRODUCTS_DATA } from "../fake_data/products";
// import { Product } from "../model/product";
import axios from 'axios';
console.log(process.env.REACT_APP_API_URL);
export default axios.create({
  baseURL: process.env.REACT_APP_API_URL || `http://192.168.8.120/rest/api/v1`
})

// const getAllProducts = (): Product[] => {
//   return PRODUCTS_DATA;
// };

// const getTopProducts = (): Product[] => {
//   return PRODUCTS_DATA.filter((product: Product) => product.isTopProduct);
// };

// const getBestProducts = (): Product[] => {
//   return PRODUCTS_DATA.filter(product => product.isBestProduct);
// };

// export default {
//   getAllProducts,
//   getTopProducts,
//   getBestProducts
// };
