import { legacy_createStore as createStore, combineReducers } from "redux";
import quotesReducer from "../features/quotes/quotesReducer";

const rootReducer = combineReducers(
    {quotes: quotesReducer}
)

export const store = createStore(rootReducer);