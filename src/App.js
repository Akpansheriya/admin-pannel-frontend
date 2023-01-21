import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import User from "./components/Screen/User";
import Pannel from "./components/Admin/Pannel";

function App() {
  return (
    <>
      <Routes>
        <Route exac path="/" element={<Login />} />
        <Route exac path="/Screen" element={<User />} />
        <Route exac path="/pannel" element={<Pannel />} />
      </Routes>
    </>
  );
}

export default App;
