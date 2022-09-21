import React from 'react';
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from 'react-icons/gr'

function Schnittmuster() {
    return (
        <Link to="artikel">
            <div className='ccSchnittmuster'>
                <img src="https://storage.makerist.de/uploads/pattern/97107/featured_image/thumbnail_featured_image_48078378.jpg" alt="Artikel Bild" />
                <div>
                    <h3>Schnittmuster Name</h3>
                    <h6>Schnittmuster Designer</h6>
                    <GrDocumentPdf className='pdfIcon' />
                </div>
            </div>
        </Link>
    );
}

export default Schnittmuster;