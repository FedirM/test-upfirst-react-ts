import { Product } from "./product";
import { Nullable } from "./share";

export interface FetchAllProductsAction {
    type: string,
    payload: Nullable<Array<Product>>
}


// export type ProductThunkAction = ThunkAction<
//     Promise<void>,
//     ProductState,
//     any,
//     FetchAllProductsAction
// >;