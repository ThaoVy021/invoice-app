import { Layout } from "antd";
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
} from "@ant-design/icons";

import SubMenu from "../../components/Menu/SubMenu";
import MenuItem from "../../components/Menu/MenuItem";
import Menu from "../../components/Menu";
import { useLocation, useNavigate } from "react-router";

import "./index.scss";

const { Sider } = Layout;

export default function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Sider theme="light">
      <div className="logo-wrapper">
        <img src="/logo.jpeg" alt="logo.jpeg" />
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathname]}
        onClick={({ key }) => {
          navigate(key);
        }}
        onOpenChange={(openKeys) => {
          navigate(openKeys[0]);
        }}
      >
        <div className="category">Recent</div>
        <MenuItem icon={<HomeOutlined />} key={"/"}>
          Home
        </MenuItem>
        <SubMenu
          key={"/invoices"}
          title="Invoices"
          icon={<BookOutlined />}
          children={[
            <MenuItem icon={<FileAddOutlined />} key={"/invoices/create"}>
              Create New
            </MenuItem>,
            <MenuItem icon={<FileUnknownOutlined />} key={"/invoices/draft"}>
              Drafts
            </MenuItem>,
          ]}
        ></SubMenu>
        <SubMenu
          icon={<UserOutlined />}
          title="Contractors"
          key={"/contractors"}
          children={[
            <MenuItem icon={<FileAddOutlined />} key={"/contractors/create"}>
              Create New
            </MenuItem>,
            <MenuItem
              icon={<FileUnknownOutlined />}
              key={"/contractors/drafts"}
            >
              Drafts
            </MenuItem>,
          ]}
        ></SubMenu>
        <MenuItem icon={<DatabaseOutlined />} key={"/products"}>
          Products and Services
        </MenuItem>
        <div className="category">Others</div>
        <MenuItem icon={<UsergroupAddOutlined />} key={"/users"}>
          Users
        </MenuItem>
        <MenuItem icon={<BarChartOutlined />} key={"/statistics"}>
          Statistics
        </MenuItem>
        <MenuItem
          icon={<SettingOutlined />}
          key={"/settings"}
          style={{ marginTop: "50px" }}
        >
          Settings
        </MenuItem>
        <MenuItem icon={<InfoCircleOutlined />} key={"/help"}>
          Help
        </MenuItem>
      </Menu>
    </Sider>
  );
}
