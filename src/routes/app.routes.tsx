import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default AppRoutes;
