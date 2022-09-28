import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='ccFooter'>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
        </div>
    );
}

export default Footer;