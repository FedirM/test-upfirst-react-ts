
import { Product } from "../interfaces/product";
import { FetchAllProductsAction } from "../interfaces/productActions";
import { REQUEST_ALL_PRODUCTS, REQUEST_ALL_PRODUCTS_ERROR, REQUEST_ALL_PRODUCTS_SUCCESS } from "./actionTypes";

export function requestAllProductsAction(): FetchAllProductsAction {
    return {
        type: REQUEST_ALL_PRODUCTS,
        payload: null
    }
};
export function requestAllProductsSuccessAction(payload: Array<Product>): FetchAllProductsAction {
    return {
        type: REQUEST_ALL_PRODUCTS_SUCCESS,
        payload
    }
};
export function requestAllProductsErrorAction(): FetchAllProductsAction {
    return {
        type: REQUEST_ALL_PRODUCTS_ERROR,
        payload: null
    }
};
