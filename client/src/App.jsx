import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Signin, Signup, Home } from "./pages/index";

export const API = "http://localhost:3000";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
