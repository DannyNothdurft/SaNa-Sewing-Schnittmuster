import React from 'react';

// components
import SearchBar from './SearchBar';
import Logo from '../../sorce/SaNaLogo.png';
import LogoShadow from '../../sorce/SaNaLogoShadow.png';

function Header({ handleChange, handleSubmitClick }) {
    return (
        <div className='ccHeader'>
            <div className='HeaderContent'>
                <SearchBar
                    handleChange={handleChange}
                    handleSubmitClick={handleSubmitClick}
                />
                <img src={Logo} alt="SaNa Sewing Handmade Logo" className='HeaderLogo' />
                <img src={LogoShadow} alt="SaNa Sewing Handmade LogoShadow" className='HeaderLogoShadow' />
            </div>
        </div>
    );
}

export default Header;