import React, { useState } from 'react';
import dataMuster from '../data/schnittmuster.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { AiOutlineDoubleLeft, AiOutlineEye } from 'react-icons/ai';
import avatarplaceholder from "../sorce/avatarplaceholder.jpeg"
import pfeilRechts from '../sorce/pfeilRight.svg';
import pfeilLinks from '../sorce/pfeilLeft.svg';
import Download from '../components/ArtikelComponents/Download';


function SingleArtikel() {

    const { id } = useParams();
    const [number, setNumber] = useState(0);

    const filterMuster = dataMuster.filter(muster => {
        return muster.id === id;
    })

    const muster = filterMuster[0];

    const switchImagesMinus = () => {

        if (number > 0) {
            setNumber(number - 1)
        }
    }

    const switchImagesPlus = () => {
        if (number < muster.images.length - 1) {
            setNumber(number + 1)
        }
    }

    const switchPic = (index) => {
        setNumber(index)
    }

    console.log(number)

    return (
        <div className='pcSingleArtikel'>
            <Link to="/"><AiOutlineDoubleLeft /> zurück</Link>
            <div className='SingleArtikelProduct'>
                <div className='SingleArtikelSlider'>

                    <div className='showPic'>
                        <img onClick={switchImagesMinus} src={pfeilLinks} className="pfeil left" alt="" />


                        <img src={muster.images[number]} alt={`Productbild von ${muster.product}`} />

                        <img onClick={switchImagesPlus} src={pfeilRechts} className="pfeil right" alt="" />
                    </div>

                    <ul className='miniPics'>
                        {muster.images.map((pic, i) =>
                            <li key={i} wert={i} onClick={() => switchPic(i)}>
                                <img className={number === i ? "activ" : null} src={pic} alt="Produkt Bild" />
                            </li>
                        )}
                    </ul>

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
                    {muster.download ?
                        <Download download={muster.download} />
                        : null}
                </div>
            </div>
        </div>
    );
}

export default SingleArtikel;