import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Registeration } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Registeration />} />
    </Routes>
  );
}
export default App;
