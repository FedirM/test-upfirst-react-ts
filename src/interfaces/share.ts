import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "../state/store";
import { State } from "./state";
import { RootState } from "../state/rootReducer";

export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type Nullable<T> = T | null;