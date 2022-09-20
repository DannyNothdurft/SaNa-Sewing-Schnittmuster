import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr'

function Schnittmuster() {
    return (
        <div className='ccSchnittmuster'>
            <img src="https://storage.makerist.de/uploads/pattern/97107/featured_image/thumbnail_featured_image_48078378.jpg" alt="Artikel Bild" />
            <div>
                <h3>Schnittmuster Name</h3>
                <h6>Schnittmuster Designer</h6>
                <GrDocumentPdf className='pdfIcon' />
            </div>
        </div>
    );
}

export default Schnittmuster;