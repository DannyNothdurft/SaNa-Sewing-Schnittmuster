import React from 'react';

// Components & Pages
import FilterStrip from '../components/ArtikelComponents/FilterStrip';
import Schnittmuster from '../components/ArtikelComponents/Schnittmuster';

function Artikel() {
  return (
    <div className='pcArtikel'>

      <div className='FilterContainer'>
        <FilterStrip />
      </div>

      <div className='ArtikelContainer'>
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
        <Schnittmuster />
      </div>

    </div>
  );
}

export default Artikel;