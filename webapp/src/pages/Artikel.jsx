import React from 'react';

// Components & Pages
import FilterStrip from '../components/ArtikelComponents/FilterStrip';
import Schnittmuster from '../components/ArtikelComponents/Schnittmuster';

function Artikel({ data }) {
  return (
    <div className='pcArtikel'>

      <div className='FilterContainer'>
        <FilterStrip />
      </div>

      <div className='ArtikelContainer'>
        {data.map(muster => (
          <li key={muster.id}>
            <Schnittmuster muster={muster} />
          </li>
        ))}
      </div>

    </div>
  );
}

export default Artikel;