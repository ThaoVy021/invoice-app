import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "../features/invoices/invoiceSlices";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
