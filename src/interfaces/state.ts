import { Product } from "./product";
import { ProductState } from "./productState";
import { Nullable } from "./share";

export interface State {
    products: Array<Product>,
    products_state: {
        status: ProductState,
        last_error: Nullable<Error>
    }
}