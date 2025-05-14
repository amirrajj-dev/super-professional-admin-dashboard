import { Route, Routes } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import SalesPage from "./pages/SalesPage";
import UsersPage from "./pages/UsersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SideBar from "./components/common/SideBar";
import { useTheme } from "./store/useTheme";
import { useEffect } from "react";

const App = () => {
  const {initializeTheme} = useTheme()
  useEffect(()=>{
    initializeTheme()
  } , [initializeTheme])
  return (
    <div className="h-screen transition-colors overflow-hidden flex flex-row font-dana-regular">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<OverviewPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="/sales" element={<SalesPage />}></Route>
          <Route path="/orders" element={<OrdersPage />}></Route>
          <Route path="/analytics" element={<AnalyticsPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
