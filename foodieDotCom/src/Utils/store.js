import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart"
import searchReducer from "./searchSlice"

const store = configureStore({
    reducer : {
        cart : cartReducer,
        search : searchReducer
    }
})


export default store