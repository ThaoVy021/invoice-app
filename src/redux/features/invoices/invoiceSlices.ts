import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  IInvoice,
  mockInvoicesData,
} from "../../../mockData/Invoices/InvoicesData";

export const DEFAULT_PAGE_SIZE = 20;

export interface InoivceState {
  data: IInvoice[];
  total: number;
  current: number;
  pageSize: number;
}

const initialState: InoivceState = {
  data: mockInvoicesData.slice(0, DEFAULT_PAGE_SIZE),
  total: mockInvoicesData.length,
  current: 1,
  pageSize: DEFAULT_PAGE_SIZE,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    getInvoices: (
      state,
      action: PayloadAction<
        Partial<Omit<IInvoice, "id" | "key">> & {
          current?: number;
          pageSize?: number;
        }
      >
    ) => {
      const {
        billedTo,
        invoiceDate,
        status,
        isVAT,
        preparedBy,
        current,
        pageSize,
      } = action.payload;

      let filteredData = mockInvoicesData;

      if (current) {
        state.current = current;
      }
      if (pageSize) {
        state.pageSize = pageSize;
        state.current = 1;
      }

      if (billedTo) {
        filteredData = filteredData.filter((e) => e.billedTo === billedTo);
      }
      if (status) {
        filteredData = filteredData.filter((e) => e.status === status);
      }
      if (isVAT) {
        filteredData = filteredData.filter((e) => e.isVAT === isVAT);
      }
      if (preparedBy) {
        filteredData = filteredData.filter((e) => e.preparedBy === preparedBy);
      }

      state.data = filteredData.slice(
        (state.current - 1) * state.pageSize,
        state.current * state.pageSize
      );
    },
    addInvoice: (
      state,
      action: PayloadAction<Omit<IInvoice, "id" | "key">>
    ) => {
      const newId = mockInvoicesData[mockInvoicesData.length - 1].id + 1;
      mockInvoicesData.push({
        key: newId,
        id: newId,
        ...action.payload,
      });
      state.total += 1;
    },
  },
});

export const { getInvoices, addInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
