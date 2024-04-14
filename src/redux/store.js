import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "./films/filmsSlice";

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;
