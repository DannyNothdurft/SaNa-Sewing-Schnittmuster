import React from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar({ handleChange, handleSubmitClick }) {
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