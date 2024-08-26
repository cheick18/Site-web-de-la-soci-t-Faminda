import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importer les styles par défaut
import aménagement_plateau_bureau_Sidi_Maaro_1 from '../images/projets/aménagement_plateau_bureau_Sidi_Maaro_1.jpg'

import aménagement_plateau_bureau_Sidi_Maaro_2 from '../images/projets/aménagement_plateau_bureau_Sidi_Maaro_2.jpg'
import aménagement_plateau_bureau_Sidi_Maaro_3 from '../images/projets/aménagement_plateau_bureau_Sidi_Maaro_3.jpg'


export default function DetailRealisation() {
    const galleryRef = useRef(null); // Référence au composant ImageGallery

    const images = [
        {
            original: aménagement_plateau_bureau_Sidi_Maaro_1,
            thumbnail: aménagement_plateau_bureau_Sidi_Maaro_1,
        },
        {
            original: aménagement_plateau_bureau_Sidi_Maaro_2,
            thumbnail: aménagement_plateau_bureau_Sidi_Maaro_2,
        },
        {
            original: aménagement_plateau_bureau_Sidi_Maaro_3,
            thumbnail: aménagement_plateau_bureau_Sidi_Maaro_3,
        },
    ];
    //construction-centreculturel-Berkane.html

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
