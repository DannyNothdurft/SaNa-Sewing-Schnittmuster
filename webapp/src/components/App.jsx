import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

// components, pages & Data
import Menu from "./Menu";
import Artikel from "../pages/Artikel";
import SingleArtikel from "../pages/SingleArtikel";
import Footer from "./Footer";


function App() {
  const schnittmuster = useSelector(state => state.schnittmuster.value);

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Artikel data={schnittmuster} />} />
        <Route path="/artikel/:id" element={<SingleArtikel />} />
      </Routes >
      <Footer />
    </BrowserRouter>
  );
}

export default App;