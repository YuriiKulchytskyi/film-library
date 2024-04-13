import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./filsms/filmsSlice";

const store = configureStore({
    reducer: {
        films: filmsReducer,
    }
})

export default store;