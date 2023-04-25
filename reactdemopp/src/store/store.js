import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    count: counterSlice.reducer,
  },
});
export default store;
