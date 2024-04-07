import { configureStore } from "@reduxjs/toolkit";
import toastReducer from './toast'


export const store = configureStore({
    reducer: {
        toast: toastReducer,
      },
});
