import { configureStore } from "@reduxjs/toolkit";

//Reducers
import toggleReducer from "../reducers/toggle/toggleSlice";

export default configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
