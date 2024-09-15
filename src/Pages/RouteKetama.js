import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importer les styles par défaut

import immeuble_appartement_R2_Kinshasa_1 from '../images/projets/immeuble_appartement_R2_Kinshasa_1.png'
import immeuble_appartement_R2_Kinshasa_2 from '../images/projets/immeuble_appartement_R2_Kinshasa_2.png'
import immeuble_appartement_R2_Kinshasa_3 from '../images/projets/immeuble_appartement_R2_Kinshasa_3.jpg'
import immeuble_appartement_R2_Kinshasa_4 from '../images/projets/immeuble_appartement_R2_Kinshasa_4.jpg'
import immeuble_appartement_R2_Kinshasa_5 from '../images/projets/immeuble_appartement_R2_Kinshasa_5.jpg'
import waga from '../images/projets/waga.png'

import travaux1 from '../images/projets/travaux1.png'
import route_ketama_2 from '../images/projets/route_ketama_2.png'
import route_ketama_3 from '../images/projets/route_ketama_3.jpg'
import route_ketama_4 from '../images/projets/route_ketama_4.jpg'
import route_ketama_5 from '../images/projets/route_ketama_5.jpg'
import route_ketama_6 from '../images/projets/route_ketama_6.jpg'
import route_ketama_7 from '../images/projets/route_ketama_7.jpg'
import route_ketama_8 from '../images/projets/route_ketama_8.jpg'
import route_ketama_9 from '../images/projets/route_ketama_9.jpg'

export default function DetailRealisation() {
    const galleryRef = useRef(null); // Référence au composant ImageGallery

    const images = [
        {
            original: travaux1,
            thumbnail: travaux1,
        },
        {
            original: route_ketama_2,
            thumbnail: route_ketama_2,
        },
        {
            original: route_ketama_3,
            thumbnail: route_ketama_3,
        },
        {
            original: route_ketama_4,
            thumbnail: route_ketama_4,
        },
        {
            original: route_ketama_5,
            thumbnail: route_ketama_5,
        },
        {
            original: route_ketama_6,
            thumbnail: route_ketama_6,
        },
        {
            original: route_ketama_7,
            thumbnail: route_ketama_7,
        },
        {
            original: route_ketama_8,
            thumbnail: route_ketama_8,
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
                            height: '100px',
                            margin: '0 5px',
                            cursor: 'pointer',
                            border: '2px solid #ddd',
                            borderRadius: '5px',
                            objectFit:'cover'

                        }}
                        onClick={() => galleryRef.current.slideToIndex(index)} 
                    />
                ))}
            </div>
        </div>
    );
}
