import sbmGroupAPIs from "../../apis/sbmGroupAPIs";
import { ActionTypes } from "../constants/actionTypes";

export const fetchProducts = () => {
  return async function (dispatch) {
    const response = await sbmGroupAPIs.get("/products");
    console.log(response);
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,
    });
  };
};

export const fetchProduct = (id) => {
  return async function (dispatch) {
    const response = await sbmGroupAPIs.get(`/products/${id}`);
    console.log(response);
    dispatch({
      type: ActionTypes.SELECTED_PRODUCT,
      payload: response.data,
    });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
