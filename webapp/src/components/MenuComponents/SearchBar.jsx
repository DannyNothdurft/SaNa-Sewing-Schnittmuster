import React from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
    return (
        <div className='ccSearchBar'>
            <input type="text" />
            <BsSearch className='SearchBarIcon' />
        </div>
    );
}

export default SearchBar;