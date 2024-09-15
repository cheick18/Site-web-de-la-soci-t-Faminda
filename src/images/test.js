import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const GalleryComponent = () => {
    const galleryRef = useRef(null);

    const renderItems = () => {
        return images.map(item => {
            if (item.original.endsWith('.mp4')) {
                return {
                    original: item.original,
                    thumbnail: item.thumbnail,
                    renderItem: () => (
                        <video width="100%" controls>
                            <source src={item.original} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ),
                };
            } else {
                return {
                    original: item.original,
                    thumbnail: item.thumbnail,
                };
            }
        });
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <ImageGallery
                ref={galleryRef}
                items={renderItems()}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showBullets={false}
                showThumbnails={false}
                slideDuration={300}
                thumbnailPosition="bottom"
                slideInterval={3000}
                renderLeftNav={() => null}
                renderRightNav={() => null}
                thumbnailClass="custom-thumbnail"
            />
            <div className="thumbnails">
                {images.map((item, index) => (
                    <img
                        key={index}
                        src={item.thumbnail}
                        alt={`Thumbnail ${index}`}
                        style={{
                            width: '100px',
                            height: '100px',
                            margin: '0 5px',
                            cursor: 'pointer',
                            border: '2px solid #ddd',
                            borderRadius: '5px',
                            objectFit: 'cover',
                        }}
                        onClick={() => galleryRef.current.slideToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GalleryComponent;
