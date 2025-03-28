import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import FileUpload from "~/pages/Dashboard/FileUpload";
import ManagedLinks from "~/pages/Dashboard/ManagedLinks";
import Dashboard from "~/pages/Dashboard/dashboard";
import Home from "~/pages/Home";
import NotFound from "~/pages/NotFound";
import Sigin from "~/pages/Sigin";
import FileContainer from "~/pages/Dashboard/components/Folder/FileManager";
import "~/styles/index.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<Sigin />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/managed-links"
              element={
                <ProtectedRoute>
                  <ManagedLinks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/file-upload"
              element={
                <ProtectedRoute>
                  <FileUpload />
                </ProtectedRoute>
              }
            />
            <Route path="/file-manager" element={<FileContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>
);
