import { Route, Routes } from "react-router-dom";
import FileUpload from "./pages/Dashboard/FileUpload";
import ManagedLinks from "./pages/Dashboard/ManagedLinks";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sigin from "./pages/Sigin";

function App() {
    return (
        <Routes>
            <Route path="/">
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
