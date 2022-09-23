import React from 'react';
import { useSelector } from 'react-redux';

// Components & Pages
import FilterStrip from '../components/ArtikelComponents/FilterStrip';
import Schnittmuster from '../components/ArtikelComponents/Schnittmuster';

function Artikel() {

  const data = useSelector(state => state.schnittmuster.value);

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