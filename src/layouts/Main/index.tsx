import { ReactNode } from "react";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Col, Layout, Row, Typography, Avatar, Space, Badge } from "antd";

import SideBar from "../../components/SideBar";

import "./index.scss";
import { useLocation } from "react-router";

interface Props {
  children: ReactNode;
}

const { Header, Content } = Layout;
const { Title } = Typography;

const mappingPathname: any = {
  "/": "Home",
  "/invoices": "Invoices",
  "/invoices/create": "Create new invoice",
};

export default function MainLayout(props: Props) {
  const { pathname } = useLocation();

  return (
    <Layout hasSider className="handle-layout">
      <SideBar />
      <Layout>
        <Header className="header">
          <Row>
            <Col span={14} className="header_title">
              <Title level={2}>{mappingPathname[pathname] ?? ""}</Title>
            </Col>
            <Col span={10} className="header_information">
              <Space size={24} wrap style={{ marginRight: "16px" }}>
                <Avatar shape="square" size="small" icon={<SearchOutlined />} />
                <Badge count={1}>
                  <Avatar shape="square" size="small" icon={<BellOutlined />} />
                </Badge>
                <Avatar
                  size={40}
                  src="https://toplist.vn/images/800px/bai-van-thuyet-minh-ve-con-meo-so-7-992007.jpg"
                />
              </Space>
            </Col>
          </Row>
        </Header>
        <Content className="content">
          <div className="content-wrapper">{props.children}</div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}
