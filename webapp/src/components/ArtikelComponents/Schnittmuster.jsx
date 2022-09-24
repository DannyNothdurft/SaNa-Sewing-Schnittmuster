import React from 'react';
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from 'react-icons/gr'

function Schnittmuster({ muster }) {
    return (
        <Link to={{
            pathname: `/artikel/${muster.id}`,
        }}>
            <div className='ccSchnittmuster'>
                <img src={muster.images[0]} alt={`Product bild von ${muster.product}`} />
                <div>
                    <h3>{muster.product}</h3>
                    <h6>{muster.designer}</h6>
                    <GrDocumentPdf className='pdfIcon' />
                </div>
            </div>
        </Link>
    );
}

export default Schnittmuster;