import React from 'react';
import dataMuster from '../data/schnittmuster.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { AiOutlineDoubleLeft, AiOutlineEye } from 'react-icons/ai';
import avatarplaceholder from "../sorce/avatarplaceholder.jpeg"

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
                    {/* ES muss ein Slider noch geben */}
                    <img src={muster.images[0]} alt={`Productbild von ${muster.product}`} />

                    {muster.manual ? <ExternalLink href={muster.manual}>Blick in die Anleitung <AiOutlineEye className='eyesIcon' /></ExternalLink> : null}
                </div>
                <div className='SingleArtikelContent'>
                    <h3>{muster.product}</h3>
                    <h5>{`Größe: ${muster.size[0]} - ${muster.size[muster.size.length - 1]}`}</h5>
                    <div className='SingleArtikelDesigner'>
                        {muster.avatar ? <img src={muster.avatar} alt="Avatar Designer" /> :
                            <img src={avatarplaceholder} alt="Sa Na Logo" />}
                        <p>von {muster.designer}</p>
                    </div>
                    <button>Download</button>
                </div>
            </div>
        </div>
    );
}

export default SingleArtikel;