import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components, pages
import Menu from "./Menu";
import Artikel from "../pages/Artikel";
import SingleArtikel from "../pages/SingleArtikel";
import Footer from "./Footer";


function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Artikel />} />
        <Route path="/artikel/:id" element={<SingleArtikel />} />
      </Routes >
      <Footer />
    </BrowserRouter>
  );
}

export default App;