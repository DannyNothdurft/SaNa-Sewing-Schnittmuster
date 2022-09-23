import React from 'react';

// components
import BlackBar from "./MenuComponents/BlackBar";
import Header from "./MenuComponents/Header";
import NavTabBar from "./MenuComponents/NavTabBar";

function Menu() {
    return (
        <div className='ccMenu'>
            <BlackBar />
            <Header />
            <NavTabBar />
        </div>
    );
}

export default Menu;