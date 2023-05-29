import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/Dashboard";
import List from "../pages/List";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/list/:type" element={<List />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
