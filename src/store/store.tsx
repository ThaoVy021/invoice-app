import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  devTools: true,
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
