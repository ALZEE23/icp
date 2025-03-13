import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sigin from "./pages/Sigin";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="signin" element={<Sigin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
