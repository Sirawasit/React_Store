import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import ProductReducer from "./ProductReducer";
import OrederReducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders: OrederReducer,
    products: ProductReducer,
    form : reduxForm
});


export default rootReducer;