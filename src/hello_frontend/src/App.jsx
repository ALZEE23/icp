import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sigin from "./pages/Sigin";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/dashboard";
import ManagedLinks from "./pages/Dashboard/ManagedLinks";
import FileUpload from "./pages/Dashboard/FileUpload";



function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="signin" element={<Sigin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/managed-links" element={<ManagedLinks />} />
        <Route path="/file-upload" element={<FileUpload />} />
      </Route>
    </Routes>
  );
}

export default App;
