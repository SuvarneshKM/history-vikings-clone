import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import castReducer from "../features/cast/castSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cast: castReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
