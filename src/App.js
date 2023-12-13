import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import CrickApi from "./pages/CrickApi";
import PointTable from "./pages/PointTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/CrickApi" element={<CrickApi />} />
          <Route path="/PointTable" element={<PointTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
