import React, { ReactNode } from "react";
import {
  BarChartOutlined,
  DatabaseOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  HomeOutlined,
  BookOutlined,
  FileUnknownOutlined,
  FileAddOutlined,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, Typography, Avatar, Space, Badge } from "antd";
import "./mainLayout.scss";

interface Props {
  children: ReactNode;
}

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

export default function MainLayout(props: Props) {
  //   const { children } = props;

  return (
    <Layout hasSider className="handle-layout">
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#fff",
        }}
      >
        <div className="demo-logo-vertical">
          <img src="/logo.jpeg" alt="logo.jpeg" />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["2"]}>
          <div className="category">Recent</div>
          <Menu.Item icon={<HomeOutlined />} key={1}>
            Home
          </Menu.Item>
          <Menu.SubMenu
            icon={<BookOutlined />}
            title="Invoices"
            key={2}
            children={[
              <Menu.Item icon={<FileAddOutlined />} key={3}>
                Create New
              </Menu.Item>,
              <Menu.Item icon={<FileUnknownOutlined />} key={4}>
                Drafts
              </Menu.Item>,
            ]}
          ></Menu.SubMenu>
          <Menu.SubMenu
            icon={<UserOutlined />}
            title="Contractors"
            key={5}
          ></Menu.SubMenu>
          <Menu.Item icon={<DatabaseOutlined />} key={6}>
            Products and Services
          </Menu.Item>
          <div className="category">Others</div>
          <Menu.Item icon={<UsergroupAddOutlined />} key={7}>
            Users
          </Menu.Item>
          <Menu.Item icon={<BarChartOutlined />} key={8}>
            Statistics
          </Menu.Item>
          <Menu.Item
            icon={<SettingOutlined />}
            key={9}
            style={{ marginTop: "50px" }}
          >
            Settings
          </Menu.Item>
          <Menu.Item icon={<InfoCircleOutlined />} key={10}>
            Help
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header
          style={{ padding: 0, background: "#ffffff" }}
          className="header"
        >
          <Row>
            <Col span={18} push={6} className="header_information">
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
            <Col span={6} pull={18} className="header_title">
              <Title level={2}>Invoices</Title>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: "#ffffff",
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
