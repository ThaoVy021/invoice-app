import { Pagination, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../redux/store/store";

import "./index.scss";
import { getInvoices } from "../../../redux/features/invoices/invoiceSlices";
import PageSizeChanger from "../../PageSizeChanger";

export default function InvoicesPaginationBar() {
  const invoices = useSelector((state: RootState) => state.invoices);
  const dispatch = useDispatch();

  const onChangePageSize = (_: any, pageSize: number) => {
    dispatch(getInvoices({ pageSize }));
  };

  const onChangePage = (current: number) => {
    dispatch(getInvoices({ current }));
  };

  return (
    <Row justify={"space-between"} align={"middle"}>
      <PageSizeChanger
        onChange={onChangePageSize}
        pageSize={invoices.pageSize}
        pageSizeOptions={[10, 20, 50, 100]}
      />
      <Pagination
        total={invoices.total}
        current={invoices.current}
        defaultPageSize={invoices.pageSize}
        pageSize={invoices.pageSize}
        onChange={onChangePage}
        showSizeChanger={false}
      />
    </Row>
  );
}
