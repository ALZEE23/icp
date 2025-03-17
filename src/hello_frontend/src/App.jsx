import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sigin from "./pages/Sigin";
import NotFound from "./pages/NotFound";
import Index from "./pages/Dashboard/index";
import ManagedLinks from "./pages/Dashboard/ManagedLinks";



function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="signin" element={<Sigin />} />
        <Route path="/dashboard" element={<Index />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/managed-links" element={<ManagedLinks />} />
      </Route>
    </Routes>
  );
}

export default App;
