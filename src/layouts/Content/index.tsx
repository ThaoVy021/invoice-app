import { Card, Flex } from "antd";
import { ReactNode } from "react";

import "./index.scss";
import { useLocation } from "react-router-dom";

interface Props {
  searchBar?: ReactNode;
  tableView: ReactNode;
  actionBar?: ReactNode;
}

export default function ContentLayout(props: Props) {
  const location = useLocation();
  const footerFixInvoice = location.pathname === "/invoices";

  return (
    <Flex
      className="main-content"
      justify="space-between"
      align="center"
      vertical
      gap={16}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex vertical style={{ width: "100%", height: "100%" }} gap={16}>
        {props.searchBar && (
          <Card
            className="search-bar"
            bordered={false}
            style={{ width: "100%" }}
          >
            {props.searchBar}
          </Card>
        )}
        <Card
          className="table-view"
          bordered={false}
          style={{
            width: "100%",
            height: footerFixInvoice ? "calc(100vh - 345px)" : "fit-content",
          }}
        >
          {props.tableView}
        </Card>
      </Flex>

      {props.actionBar && (
        <Card className="action-bar" bordered={false} style={{ width: "100%" }}>
          {props.actionBar}
        </Card>
      )}
    </Flex>
  );
}
