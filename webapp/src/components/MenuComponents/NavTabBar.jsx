import React from 'react';
import { Link } from 'react-router-dom';

import SizeKinderFilter from '../ArtikelComponents/SizeKinderFilter';

// data & reducer
import { useDispatch } from 'react-redux';
import { resetet, setGender } from '../../reducer/schnittmusterSlice';
import data from '../../data/schnittmuster.json';

function NavTabBar() {

    const dispatch = useDispatch();

    const resetFilter = () => {
        dispatch(resetet(data))
        dispatch(setGender(""));
    }

    return (
        <div className='ccNavTabBar'>

            <div className='NavTabBarContent'>
                <p>Wähle dein Größe: </p>
                <SizeKinderFilter />
                <Link to='/' onClick={resetFilter}>Schnittmuster</Link>
            </div>
        </div>
    );
}

export default NavTabBar;