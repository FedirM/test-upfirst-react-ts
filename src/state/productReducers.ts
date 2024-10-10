import { FetchAllProductsAction } from "../interfaces/productActions";
import { State } from "../interfaces/state";
import { REQUEST_ALL_PRODUCTS, REQUEST_ALL_PRODUCTS_ERROR, REQUEST_ALL_PRODUCTS_SUCCESS} from "./actionTypes";
import { ProductState } from "../interfaces/productState";
import { Product } from "../interfaces/product";

const INITIAL_STATE: State = {
    products: [],
    products_state: {
        status: ProductState.Ready,
        last_error: null
    }
};

function productsReducer(state = INITIAL_STATE, action: FetchAllProductsAction): State {
    console.debug('[productsReducer] action: ', action);
    switch(action.type) {
        case REQUEST_ALL_PRODUCTS: {
            return {
                ...state,
                products_state: {
                    status: ProductState.Loading,
                    last_error: null
                }
            };
        }
        case REQUEST_ALL_PRODUCTS_ERROR: {
            return {
                ...state,
                products_state: {
                    status: ProductState.Error,
                    last_error: new Error("Fetch error!")
                }
            };
        }
        case REQUEST_ALL_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.payload as Product[],
                products_state: {
                    status: ProductState.Ready,
                    last_error: null
                }
            };
        }

        default: {
            return {
                ...state,
                products: action.payload as Product[]
            };
        }
    }
}

export default productsReducer;