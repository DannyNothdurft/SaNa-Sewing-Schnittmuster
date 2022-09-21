import React from 'react';
import { Link } from 'react-router-dom';

function NavTabBar() {

    // Eventuell wird diese Navigation als Filter dienen
    return (
        <div className='ccNavTabBar'>
            <div className='NavTabBarContent'>
                <Link to='/'>Schnittmuster</Link>
            </div>
        </div>
    );
}

export default NavTabBar;