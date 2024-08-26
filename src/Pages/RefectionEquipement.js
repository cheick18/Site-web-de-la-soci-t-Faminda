import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importer les styles par défaut
import aménagement_plateau_bureau_Sidi_Maaro_1 from '../images/projets/aménagement_plateau_bureau_Sidi_Maaro_1.jpg'

import refection_remise_en_etat_equipements_4 from '../images/projets/refection_remise_en_etat_equipements_4.jpg'
import refection_remise_en_etat_equipements_2 from '../images/projets/refection_remise_en_etat_equipements_2.png'
import refection_remise_n_etat_equipements_1 from '../images/projets/refection_remise_n_etat_equipements_1.jpg'
import refection_remise_n_etat_equipements_3 from '../images/projets/refection_remise_n_etat_equipements_3.jpg'

export default function DetailRealisation() {
    const galleryRef = useRef(null); // Référence au composant ImageGallery

    const images = [
       
        {
            original: refection_remise_en_etat_equipements_2,
            thumbnail: refection_remise_en_etat_equipements_2,
        },
        {
            original: refection_remise_n_etat_equipements_3,
            thumbnail: refection_remise_n_etat_equipements_3,
        },
        {
            original: refection_remise_en_etat_equipements_4,
            thumbnail: refection_remise_en_etat_equipements_4,
        },
        {
            original: refection_remise_n_etat_equipements_1,
            thumbnail: refection_remise_n_etat_equipements_1,
        },
      
    ];
  

    return (
        <div style={{ maxWidth: '800px', margin: '0 5%' }}>
            <h1>Page de détail</h1>
            <div style={{ marginBottom: '20px' }}>
                <ImageGallery
                    ref={galleryRef} // Référence au composant
                    items={images}
                    showNav={false} // Masquer la navigation
                    showPlayButton={false} // Masquer le bouton de lecture
                    showFullscreenButton={false} // Masquer le bouton plein écran
                    showBullets={false} 
                    showThumbnails={false}
                    slideDuration={300} 
                    thumbnailPosition="bottom" // Position des miniatures
                    slideInterval={3000} 
                    renderLeftNav={() => null} 
                    renderRightNav={() => null} 
                    thumbnailClass="custom-thumbnail" 
                />
            </div>
            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.thumbnail}
                        alt={`Thumbnail ${index}`}
                        style={{
                            width: '100px',
                            height: 'auto',
                            margin: '0 5px',
                            cursor: 'pointer',
                            border: '2px solid #ddd',
                            borderRadius: '5px',
                        }}
                        onClick={() => galleryRef.current.slideToIndex(index)} 
                    />
                ))}
            </div>
        </div>
    );
}
