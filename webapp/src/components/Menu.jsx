import React from 'react';

// components
import BlackBar from "./MenuComponents/BlackBar";
import Header from "./MenuComponents/Header";
import NavTabBar from "./MenuComponents/NavTabBar";

function Menu({ handleChange, handleSubmitClick }) {
    return (
        <div className='ccMenu'>
            <BlackBar />
            <Header
                handleChange={handleChange}
                handleSubmitClick={handleSubmitClick}
            />
            <NavTabBar />
        </div>
    );
}

export default Menu;