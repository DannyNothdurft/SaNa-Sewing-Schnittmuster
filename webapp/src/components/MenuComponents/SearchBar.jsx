import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

// data & reducer
import { useDispatch, useSelector } from 'react-redux';
import { decrement, setfilter } from '../../reducer/schnittmusterSlice';
import dataMuster from '../../data/schnittmuster.json';


function SearchBar() {

    const dispatch = useDispatch();
    const schnittdata = useSelector(state => state.schnittmuster.submit);

    function handleChange(event) {
        const value = event.target.value
        dispatch(setfilter(value))
    }

    const [data, setData] = useState(dataMuster);

    const handleSubmitClick = (event) => {
        event.preventDefault()

        const split = schnittdata.split(' ');

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

        dispatch(decrement(neueDaten))
    };

    return (
        <div className='ccSearchBar'>
            <form onSubmit={handleSubmitClick}>
                <input type="text" onChange={handleChange} />
                <BsSearch className='SearchBarIcon' />
            </form>
        </div>
    );
}

export default SearchBar;