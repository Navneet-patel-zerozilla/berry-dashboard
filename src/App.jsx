import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./Layout/DashboardLayout";
import CustomerList from "./pages/CustomerList/CustomerList";
import OrderList from "./pages/OrderList/OrderList";
import CreateInvoice from "./pages/Create Invoice/CreateInvoice";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="customer-list" element={<CustomerList />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="create-invoice" element={<CreateInvoice />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
