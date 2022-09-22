import React from 'react';
import dataMuster from '../data/schnittmuster.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { AiOutlineDoubleLeft, AiOutlineEye } from 'react-icons/ai';

function SingleArtikel() {

    const { id } = useParams();

    const filterMuster = dataMuster.filter(muster => {
        return muster.id === id;
    })

    const muster = filterMuster[0];

    return (
        <div className='pcSingleArtikel'>
            <Link to="/"><AiOutlineDoubleLeft /> zurück</Link>
            <div className='SingleArtikelProduct'>
                <div className='SingleArtikelSlider'>
                    <img src={muster.images} alt={`Productbild von ${muster.product}`} />

                    <ExternalLink href={muster.manual}>Blick in die Anleitung <AiOutlineEye className='eyesIcon' /></ExternalLink>
                </div>
                <div className='SingleArtikelContent'>
                    <h3>{muster.product}</h3>
                    <h5>{`Größe: ${muster.size[0]} - ${muster.size[muster.size.length - 1]}`}</h5>
                    <div className='SingleArtikelDesigner'>
                        <img src='https://storage.makerist.de/uploads/user/avatar/1363732/small_avatar_7a7d1794.jpg' alt="Avatar Designer" />
                        <p>von {muster.designer}</p>
                    </div>
                    <button>Download</button>
                </div>
            </div>
        </div>
    );
}

export default SingleArtikel;