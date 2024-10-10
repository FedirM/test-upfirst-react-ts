import { combineReducers } from "redux";
import productsReducer from "./productReducers";

const rootReducer = combineReducers({product: productsReducer});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;