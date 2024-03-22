import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Signup } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
}
export default App;
