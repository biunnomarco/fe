import { configureStore } from "@reduxjs/toolkit";
import artistSlice from "./artistSlice";
import localSlice from "./localSlice";
import loginSlice from "./loginSlice"

const store = configureStore({
    reducer: {
        artists: artistSlice,
        locals: localSlice,
        login: loginSlice
    }
})

export default store;