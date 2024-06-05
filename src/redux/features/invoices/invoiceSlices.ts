import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  IInvoice,
  mockInvoicesData,
} from "../../../mockData/Invoices/InvoicesData";

export interface InoivceState {
  data: IInvoice[];
}

const initialState: InoivceState = {
  data: mockInvoicesData.slice(0, 10),
};

export const inoivceSlice = createSlice({
  name: "inoivce",
  initialState,
  reducers: {
    getData: (
      state,
      action: PayloadAction<
        Partial<Omit<IInvoice, "id">> & { current: number; pageSize: number }
      >
    ) => {
      const {
        billedTo,
        invoiceDate,
        status,
        isVAT,
        preparedBy,
        current = 20,
        pageSize = 1,
      } = action.payload;
      const filteredData = mockInvoicesData.filter(
        (e) => e.billedTo === billedTo
      );

      state.data = filteredData.slice(
        (current - 1) * pageSize,
        current * pageSize
      );
    },
  },
});

export const { getData } = inoivceSlice.actions;

export default inoivceSlice.reducer;
