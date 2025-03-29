import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "~/styles/index.css";

import DashboardLayout from "~/components/layouts/DashboardLayout";
import MainLayout from "~/components/layouts/MainLayout";
import ProtectedRoute from "~/components/layouts/ProtectedRoute";
import { AuthProvider } from "~/contexts/AuthContext";
import Dashboard from "~/pages/Dashboard/Dashboard";
import FileUpload from "~/pages/Dashboard/FileUpload";
import ManagedLinks from "~/pages/Dashboard/ManagedLinks";
import Home from "~/pages/Home";
import NotFound from "~/pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/managed-links" element={<ManagedLinks />} />
              <Route path="/file-upload" element={<FileUpload />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
