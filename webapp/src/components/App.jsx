import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducer/counterSlice';

// components, pages & Data
import dataMuster from '../data/schnittmuster.json';
import Menu from "./Menu";
import Artikel from "../pages/Artikel";
import SingleArtikel from "../pages/SingleArtikel";
import Footer from "./Footer";

/*
<div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
 */

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch()

  const [data, setData] = useState(dataMuster);
  const [suche, setSuche] = useState([]);
  const [filter, setFilter] = useState(data);

  function handleChange(event) {
    setSuche(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmitClick = (event) => {
    event.preventDefault()

    const split = suche.split(' ');

    let neueDaten = [];
    let filterIDs = [];

    for (let i = 0; i < split.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].product.toLowerCase().includes(split[i].toLowerCase())) {

          let durchlauf = [data[j]];
          let durchlaufID = [data[j].id];
          let vergleich = filterIDs.includes(durchlauf[0].id)

          if (vergleich) {
            console.log("Bereits vorhanden")
          }

          if (!vergleich) {
            console.log("eintrag gefunden")
            neueDaten.push.apply(neueDaten, durchlauf);
            filterIDs.push.apply(filterIDs, durchlaufID);
          }
        }
      }
    }

    setFilter(neueDaten)
  };

  return (
    <BrowserRouter>
      <Menu
        handleChange={handleChange}
        handleSubmitClick={handleSubmitClick}
      />
      <Routes>
        <Route path="/" element={<Artikel data={count} />} />
        <Route path="/artikel/:id" element={<SingleArtikel />} />
      </Routes >
      <Footer />
    </BrowserRouter>
  );
}

export default App;