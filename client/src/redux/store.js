import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./user/user.slice";

export const store = configureStore({
  reducer: { user: userReduser },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
