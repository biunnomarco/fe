import { configureStore } from "@reduxjs/toolkit";
import artistSlice from "./artistSlice";
import localSlice from "./localSlice";
import loginSlice from "./loginSlice"
import eventSlice from "./eventSlice"

const store = configureStore({
    reducer: {
        artists: artistSlice,
        locals: localSlice,
        login: loginSlice,
        events: eventSlice,
    }
})

export default store;