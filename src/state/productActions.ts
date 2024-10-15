import { FetchAllProductsAction } from "../interfaces/productActions";
import { requestAllProductsAction, requestAllProductsErrorAction, requestAllProductsSuccessAction } from "./actionsCreators";
import { fetchAllProducts } from "../api/products";
import { Product } from "../interfaces/product";
import { Dispatch } from "redux";


export function requestAllProducts() {
    return async function(dispatch: Dispatch<FetchAllProductsAction>) {
        dispatch(requestAllProductsAction());
        fetchAllProducts()
            .then((res: Array<Product>) => {
                setTimeout(() => {
                    dispatch(requestAllProductsSuccessAction(res));
                });
            })
            .catch(err => {
                console.error('Fetch all products error: ', err);
                dispatch(requestAllProductsErrorAction())
            })
    }
}