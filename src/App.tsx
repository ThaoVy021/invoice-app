import { ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import MainLayout from "./layouts/Main";
import ComingSoonPage from "./pages/ComingSoon";
import Invoices from "./pages/Invoices";
import CreateNew from "./pages/CreateNewInvoice";

const primaryColor = "#00127f";
const colors1 = ["#2c4fd1", primaryColor];
const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
          boxShadow: "",
        },
        components: {
          Layout: {
            bodyBg: "#fff",
          },
          Typography: {
            colorText: "00127f",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          },
          Menu: {
            itemBg: "#fff",
            itemColor: primaryColor,
            itemSelectedBg: primaryColor,
            itemSelectedColor: "#fff",
            subMenuItemBg: "#fff",
          },
          Dropdown: {
            colorPrimary: "transparent",
          },
          Button: {
            colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
              colors1
            ).join(", ")})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
              colors1
            ).join(", ")})`,
            lineWidth: 0,
            // defaultColor: primaryColor,
            defaultBorderColor: primaryColor,
          },
        },
      }}
    >
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/create" element={<CreateNew />} />
            <Route path="*" element={<ComingSoonPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
