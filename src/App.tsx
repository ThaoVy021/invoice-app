import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import MainLayout from "./layouts/Main";
import ComingSoonPage from "./pages/ComingSoon";
import Invoices from "./pages/Invoices";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyBg: "#fff",
          },
          Typography: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          },
          Menu: {
            itemBg: "#fff",
            itemColor: "#00127f",
            itemSelectedBg: "#00127f",
            itemSelectedColor: "#fff",
            subMenuItemBg: "#fff",
          },
        },
      }}
    >
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/invoices" element={<Invoices />} />
            <Route path="*" element={<ComingSoonPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
