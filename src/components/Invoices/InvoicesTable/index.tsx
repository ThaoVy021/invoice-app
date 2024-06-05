import React, { useEffect, useState } from "react";
import { Table, Button, Tag } from "antd";
import type { TableColumnsType } from "antd";
import "./index.scss";
import { IInvoice } from "../../../mockData/Invoices/InvoicesData";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CheckOutlined,
  CloseOutlined,
  DownloadOutlined,
  EyeOutlined,
  FilePdfOutlined,
  MailOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { SortOrder } from "antd/es/table/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getInvoices } from "../../../redux/features/invoices/invoiceSlices";

export function sortIcon(sortOrder: SortOrder) {
  return (
    <>
      <ArrowDownOutlined
        style={{ color: sortOrder === "ascend" ? "#00127f" : "#848eb266" }}
      />
      <ArrowUpOutlined
        style={{ color: sortOrder === "descend" ? "#00127f" : "#848eb266" }}
      />
    </>
  );
}

export function tagColorMapping(status: string) {
  switch (status) {
    case "Outstanding": {
      return "blue";
    }
    case "Drafts": {
      return "yellow";
    }
    case "Late": {
      return "red";
    }
    case "Paid": {
      return "green";
    }
    default: {
      return "default";
    }
  }
}

const columns: TableColumnsType<IInvoice> = [
  {
    title: "Invoice ID",
    dataIndex: "id",
    sorter: true,
    sortIcon: ({ sortOrder }) => sortIcon(sortOrder),
  },
  {
    title: "Billed To",
    dataIndex: "billedTo",
    sorter: true,
    sortIcon: ({ sortOrder }) => sortIcon(sortOrder),
  },
  {
    title: "Invoice Date",
    dataIndex: "invoiceDate",
    sorter: true,
    sortIcon: ({ sortOrder }) => sortIcon(sortOrder),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => <Tag color={tagColorMapping(status)}>{status}</Tag>,
  },
  {
    title: "VAT",
    width: 60,
    dataIndex: "isVAT",
    render: (isVAT: boolean) => (isVAT ? <CheckOutlined /> : <CloseOutlined />),
  },
  {
    title: "Export",
    render: (row) => (
      <>
        <Button type="text" shape="circle" icon={<DownloadOutlined />} />
        <Button type="text" shape="circle" icon={<FilePdfOutlined />} />
        <Button type="text" shape="circle" icon={<PrinterOutlined />} />
        <Button type="text" shape="circle" icon={<MailOutlined />} />
        <Button type="text" shape="circle" icon={<EyeOutlined />} />
      </>
    ),
  },
];

export default function InvoicesTable() {
  const invoices = useSelector((state: RootState) => state.invoices.data);
  const dispatch = useDispatch();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    dispatch(getInvoices({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
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
        dataSource={invoices}
        size="small"
        pagination={false}
        scroll={{ y: 320 }}
        style={{
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
