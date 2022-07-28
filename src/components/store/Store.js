import { legacy_createStore as createStore } from "redux";
import { addReducer } from "./Reducers";


export const Store = createStore(addReducer)