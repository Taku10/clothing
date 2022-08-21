import handleCart from "./handleCart";
import handleWishList from "./handleWishlist";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleCart:handleCart, handleWishList:handleWishList
})

export default rootReducers