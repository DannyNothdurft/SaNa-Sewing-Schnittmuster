import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { AiOutlineDoubleLeft, AiOutlineEye } from 'react-icons/ai';

function SingleArtikel() {
    return (
        <div className='pcSingleArtikel'>
            <Link to="/"><AiOutlineDoubleLeft /> zurück</Link>
            <div className='SingleArtikelProduct'>
                <div className='SingleArtikelSlider'>
                    <img src="https://storage.makerist.de/uploads/pattern/97107/featured_image/featured_image_48078378.jpg" alt="" />

                    <ExternalLink href='https://storage.makerist.de/uploads/pattern/97107/tutorial_preview/vorschau_pdf.pdf'>Blick in die Anleitung <AiOutlineEye className='eyesIcon' /></ExternalLink>
                </div>
                <div className='SingleArtikelContent'>
                    <h3>Jacke Sansa, Übergangsjacke, Gropped Jacke</h3>
                    <h5>Gr. 34 - 50</h5>
                    <div className='SingleArtikelDesigner'>
                        <img src='https://storage.makerist.de/uploads/user/avatar/1363732/small_avatar_7a7d1794.jpg' alt="Avatar Designer" />
                        <p>von Graustufen-Stoffe</p>
                    </div>
                    <button>Download</button>
                </div>
            </div>
        </div>
    );
}

export default SingleArtikel;