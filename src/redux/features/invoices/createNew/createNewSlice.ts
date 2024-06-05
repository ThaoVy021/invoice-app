import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ICreateNew,
  createNew,
} from "../../../../mockData/Invoices/CreateNew/CreateNew";
import { IInvoice } from "../../../../mockData/Invoices/InvoicesData";

export interface InoivceItemsState {
  data: ICreateNew[];
  selectedItems: ICreateNew[];
  invoiceInfo: Partial<IInvoice>;
  total: number;
  taxBase: number;
  vat: number;
}

const initialState: InoivceItemsState = {
  data: createNew,
  selectedItems: [],
  invoiceInfo: {},
  total: 0,
  taxBase: 0,
  vat: 0,
};

export const newInvoiceSlice = createSlice({
  name: "newInvoice",
  initialState,
  reducers: {
    selectItems: (state, action: PayloadAction<React.Key[]>) => {
      const selectedItems = createNew.filter((e) =>
        action.payload.includes(e.key)
      );

      state.selectedItems = selectedItems;
      state.total = selectedItems.reduce(
        (pre: number, cur: ICreateNew) => pre + cur.price,
        0
      );
    },
    setInvoiceInfo: (state, action: PayloadAction<IInvoice | any>) => {
      state.invoiceInfo = action.payload;
    },
  },
});

export const { selectItems, setInvoiceInfo } = newInvoiceSlice.actions;

export default newInvoiceSlice.reducer;
