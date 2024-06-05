import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "../features/invoices/invoiceSlices";
import newInvoiceReducer from "../features/invoices/createNew/createNewSlice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    newInvoice: newInvoiceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
