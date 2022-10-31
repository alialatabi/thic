import { React } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Service from "./Pages/Searvice";
import WithLayout from "./Componants/WithLayout";
import Home from "./Pages/Home";
import notfound from "./Pages/notfound";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={WithLayout(Home)} />
      <Route path="/Service/Marine" element={WithLayout(Service)} />
      <Route path="/Service/Motor" element={WithLayout(Service)} />
      <Route path="/Service/Fire" element={WithLayout(Service)} />
      <Route path="/Service/Personal" element={WithLayout(Service)} />
      <Route path="/Service/Medical" element={WithLayout(Service)} />
      <Route path="/Service/Engineering" element={WithLayout(Service)} />
      <Route path="/Contact" element={WithLayout(Contact)} />
      <Route path="*" element={WithLayout(notfound)} />
    </Routes>
  );
}

export default App;
