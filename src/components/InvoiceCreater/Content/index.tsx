import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import "./index.scss";
import { ICreateNew } from "../../../mockData/Invoices/CreateNew/CreateNew";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { selectItems } from "../../../redux/features/invoices/createNew/createNewSlice";

const columns: TableColumnsType<ICreateNew> = [
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => <span>{price} BRN</span>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => <span>{amount} BRN</span>,
  },
];

export default function Content() {
  const newInvoices = useSelector((state: RootState) => state.newInvoice.data);
  const dispatch = useDispatch();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    dispatch(selectItems(newSelectedRowKeys));
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="content-invoices">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={newInvoices}
        size="small"
        pagination={false}
        scroll={{ y: 280 }}
        style={{
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
