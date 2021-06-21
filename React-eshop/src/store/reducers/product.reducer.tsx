import {
  FETCH_ALL_PRODUCTS,
  CHECK_AVAILABILITY,
  // FETCH_BEST_PRODUCTS,
  // FETCH_TOP_PRODUCTS,
  // UPDATE_FILTER
} from "../actions/product.types";
import { Product } from "../model/product";

const initialState = {
  products: [],
  storeStatus: []
};
const ProductReducer = (
  state = initialState,
  action: { type: string; payload: Product[] }
) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      console.log(`*** ${type} ***`);
      payload.forEach(item => {
        item.checkAvailability = false;
      })
      return {
        ...state,
        products: payload
      };
    case CHECK_AVAILABILITY:
      console.log(`*** ${type} ***`);
      // const status = state.storeStatus;
      // const findid = status.findIndex(s:  => s.id === payload.id);
      // status[findid] = payload;
      return {
        ...state,
        storeStatus: payload
      };
    // case FETCH_TOP_PRODUCTS:
    //   console.log(`*** ${type} ***`);
    //   return {
    //     ...state,
    //     topProducts: payload
    //   };
    // case UPDATE_FILTER:
    //   console.log(`*** ${type} ***`);
    //   return {
    //     ...state,
    //     filter: payload
    //   };
    default:
      return state;
  }
};

export default ProductReducer;
