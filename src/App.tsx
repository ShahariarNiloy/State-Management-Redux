import "./App.css";
import CounterPage from "./pages/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./layout/Navbar";
import CrudPage from "./pages/Crud";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
