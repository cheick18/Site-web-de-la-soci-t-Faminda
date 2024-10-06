import React, { useRef, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import aménagement_plateau_bureau_Sidi_Maaro_1 from '../images/projets/aménagement_plateau_bureau_Sidi_Maaro_1.jpg';

import centre_culturel_berkane_1 from '../images/projets/centre_culturel_berkane_1.png';
import centre_culturel_berkane_2 from '../images/projets/centre_culturel_berkane_2.jpg';
import centre_culturel_berkane_3 from '../images/projets/centre_culturel_berkane_3.jpg';
import centre_culturel_berkane_4 from '../images/projets/centre_culturel_berkane_4.jpg';
import centre_culturel_berkane_5 from '../images/projets/centre_culturel_berkane_5.jpg';
//import video_file from '../videos/ma_video.mp4'; // Chemin vers ta vidéo
//import video_thumbnail from '../images/projets/video-thumbnail.jpg'; // Miniature de la vidéo
import { Box, Divider, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Footer from '../Components/Footer';

export default function DetailRealisation() {
    useEffect(() => {
        // Réinitialiser la position de défilement à 0
        window.scrollTo(0, 0);
    }, []);

    const galleryRef = useRef(null); // Référence au composant ImageGallery

    const images = [
        {
            original: centre_culturel_berkane_1,
            thumbnail: centre_culturel_berkane_1,
        },
        {
            original: centre_culturel_berkane_2,
            thumbnail: centre_culturel_berkane_2,
        },
        {
            original: centre_culturel_berkane_3,
            thumbnail: centre_culturel_berkane_3,
        },
        {
            original: centre_culturel_berkane_4,
            thumbnail: centre_culturel_berkane_4,
        },
        {
            original: centre_culturel_berkane_5,
            thumbnail: centre_culturel_berkane_5,
        },
        {
            original:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 
            thumbnail:centre_culturel_berkane_5, // Miniature de la vidéo
            embed: true, // Indiquer que c'est une vidéo
        },
    ];

    const renderGalleryItem = (item) => {
        if (item.embed) {
            return (
                <div>
                    <video controls style={{ width: '100%' }}>
                        <source src={item.original} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
            );
        }

        return <img src={item.original} alt={item.thumbnail} style={{ width: '100%' }} />;
    };

    return (
        <>
            <Typography variant='h4' color='#424242' sx={{ fontFamily: 'Montserrat, sans-serif', paddingTop: '48px', margin: '0 5%' }}>
                Construction du centre culturel<br /> de Berkane
            </Typography>
            <div style={{ maxWidth: '800px', margin: '0 5%', paddingTop: '48px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <ImageGallery
                        ref={galleryRef}
                        items={images}
                        showNav={false}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showBullets={false}
                        showThumbnails={false}
                        slideDuration={300}
                        slideInterval={3000}
                        renderItem={renderGalleryItem} // Utiliser le rendu personnalisé
                        renderLeftNav={() => null}
                        renderRightNav={() => null}
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
                                objectFit: 'cover'
                            }}
                            onClick={() => galleryRef.current.slideToIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <Box sx={{ paddingLeft: '4%', paddingTop: '48px' }}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'white' }}>📏</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Surface réalisée" secondary="3 000 m²" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'white' }}>🏙️</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Ville" secondary="Berkane" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'white' }}>📚</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Mission" secondary="Etude technique" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'white' }}>📅</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Date" secondary="2023-2024" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </Box>
            <Footer />
        </>
    );
}
