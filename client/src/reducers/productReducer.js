import _ from 'lodash';
import {
  SHOW_PRODUCTS,
  CREATE_PRODUCT,
  SHOW_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  HANDLE_PRODUCT_DATA,
  RESET_PRODUCT_DATA
} from '../actions/types';


const INTIAL_STATE = {
  products: {},
  product: {}
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      console.log("stateuvhbv", state, action.payload)
      // return { ...state, state: action.payload };
      return { ...state, products: _.mapKeys(action.payload, '_id') };
    case SHOW_PRODUCT:
      return { ...state, product: action.payload };
    case CREATE_PRODUCT:
      return { ...state, products: { ...state.products, [action.payload._id]: action.payload } };
    case HANDLE_PRODUCT_DATA:
      return { ...state, product: { ...state.product, ...action.payload } };
    case RESET_PRODUCT_DATA:
      console.log("stateuvhbv", state, action.payload)
      return { ...state, product: {}};
    case UPDATE_PRODUCT:
      return { ...state, product: { ...state.product, ...action.payload } };
    case DELETE_PRODUCT:
      //console.log("redstate", action.payload)
      return { ...state, products: _.omit(state.products, action.payload)};
     // return _.omit(state.products, action.payload);
    default:
      return state;
  }
};
