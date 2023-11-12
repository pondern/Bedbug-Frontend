import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Buildings from "./screens/Buildings.jsx";
import BuildingDetail from "./screens/BuildingDetail.jsx";
import BuildingEdit from "./screens/BuildingEdit.jsx";
import BuildingCreate from "./screens/BuildingCreate.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buildings" element={<Buildings />} />
        <Route path="/Buildings/:id" element={<BuildingDetail />} />
        <Route path="/add-Building" element={<BuildingCreate />} />
        <Route path="/Buildings/:id/edit" element={<BuildingEdit />} />
      </Routes>
    </div>
  );
}

export default App;
