import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reservation from "./pages/Reservation";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
