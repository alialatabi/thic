import { React } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import WithLayout from "./Componants/WithLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={WithLayout(Home)} />
    </Routes>
  );
}

export default App;
