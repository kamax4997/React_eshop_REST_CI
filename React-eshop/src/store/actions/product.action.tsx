import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_ERRORS,
  CHECK_AVAILABILITY,
  CHECK_AVAILABILITY_ERRORS,
  // FETCH_BEST_PRODUCTS,
  // FETCH_TOP_PRODUCTS,
  // UPDATE_FILTER
} from "./product.types";
import axios from "../services/products.service";
import { Product } from "../model/product";

export const fetchAllProducts = () => async (
  dispatch: (arg0: { type: string; payload: Product[] }) => void
) => {
  // const products = ProductService.getAllProducts();
  axios
    .get('/toy/toys')
    .then(res => {
      dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_ALL_PRODUCTS_ERRORS,
        payload: err.response
      })
    });
};

export const checkProductAvailability = (id: number) => async (
  dispatch: (arg0: { type: string; payload: boolean }) => void
) => {
  console.log("id", id);
  // const products = ProductService.getAllProducts();
  axios
    .get('/toy/check?id=' + id)
    .then(res => {
      dispatch({
        type: CHECK_AVAILABILITY,
        payload: res.data.data === 0 ? false :true
      })
    })
    .catch(err => {
      dispatch({
        type: CHECK_AVAILABILITY_ERRORS,
        payload: err.response
      })
    });
};

// export const updateFilter = (
//   payload: string,
//   type = "productCategory"
// ) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
//   dispatch({
//     type: UPDATE_FILTER,
//     payload: payload
//   });
//   let prodDupList: Product[] = [];
//   const products: Product[] = [...ProductService.getAllProducts()];
//   let filteredData: Product[] = [];
//   if (payload !== "All") {
//     // eslint-disable-next-line array-callback-return
//     products.map((prod: any): void => {
//       if (prod[type] === payload) {
//         filteredData.push(prod);
//       }
//     });
//     prodDupList = filteredData;
//   } else {
//     prodDupList = filteredData = products;
//   }

//   dispatch({
//     type: FETCH_ALL_PRODUCTS,
//     payload: prodDupList
//   });
// };

// export const fetchTopProducts = () => async (
//   dispatch: (arg: { type: string; payload: Product[] }) => void
// ) => {
//   const products = ProductService.getTopProducts();
//   dispatch({ type: FETCH_TOP_PRODUCTS, payload: products });
// };

// export const fetchBestProducts = () => async (
//   dispatch: (arg: { type: string; payload: Product[] }) => void
// ) => {
//   const products = ProductService.getBestProducts();
//   dispatch({ type: FETCH_BEST_PRODUCTS, payload: products });
// };
