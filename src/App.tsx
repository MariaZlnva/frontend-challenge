// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cats from "./components/Cats/Cats";
import SaveCats from "./components/SaveCats/SaveCats";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/save-cats" element={<SaveCats />} />
      </Routes>
    </div>
  );
}

export default App;
