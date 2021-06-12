import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    productsReducer
})

export default rootReducer;