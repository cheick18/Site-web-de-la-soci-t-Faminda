import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importer les styles par défaut
import aménagement_plateau_bureau_Sidi_Maaro_1 from '../images/projets/aménagement_plateau_bureau_Sidi_Maaro_1.jpg'

import extention_academique_universite_alkhawayne_4 from '../images/projets/extention_academique_universite_alkhawayne_4.jpg'
import extention_academique_universite_alkhawayne_3 from '../images/projets/extention_academique_universite_alkhawayne_3.jpg'
import extention_academique_universite_alkhawayne_2 from '../images/projets/extention_academique_universite_alkhawayne_2.jpg'
import extention_academique_universite_alkhawayne_1 from '../images/projets/extention_academique_universite_alkhawayne_1.jpg'
import extention_academique_universite_alkhawayne_5 from '../images/projets/extention_academique_universite_alkhawayne_5.jpg'
import extention_academique_universite_alkhawayne_6 from '../images/projets/extention_academique_universite_alkhawayne_6.jpg'
import extention_academique_universite_alkhawayne_7 from '../images/projets/extention_academique_universite_alkhawayne_7.jpg'
import extention_academique_universite_alkhawayne_8 from '../images/projets/extention_academique_universite_alkhawayne_8.jpg'
import extention_academique_universite_alkhawayne_9 from '../images/projets/extention_academique_universite_alkhawayne_9.jpg'
import extention_academique_universite_alkhawayne_10 from '../images/projets/extention_academique_universite_alkhawayne_10.jpg'
import { Box, Divider, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Footer from '../Components/Footer';
export default function DetailRealisation() {
    const galleryRef = useRef(null); // Référence au composant ImageGallery

    const images = [
       
        {
            original: extention_academique_universite_alkhawayne_1,
            thumbnail: extention_academique_universite_alkhawayne_1,
        },
        {
            original: extention_academique_universite_alkhawayne_2,
            thumbnail: extention_academique_universite_alkhawayne_2,
        },
        {
            original: extention_academique_universite_alkhawayne_3,
            thumbnail: extention_academique_universite_alkhawayne_3,
        },
        {
            original: extention_academique_universite_alkhawayne_4,
            thumbnail: extention_academique_universite_alkhawayne_4,
        },
        {
            original: extention_academique_universite_alkhawayne_10,
            thumbnail: extention_academique_universite_alkhawayne_10,
        },
        {
            original: extention_academique_universite_alkhawayne_5,
            thumbnail: extention_academique_universite_alkhawayne_5,
        },
        {
            original: extention_academique_universite_alkhawayne_6,
            thumbnail: extention_academique_universite_alkhawayne_6,
        },
        {
            original: extention_academique_universite_alkhawayne_7,
            thumbnail: extention_academique_universite_alkhawayne_7,
        },
        {
            original: extention_academique_universite_alkhawayne_8,
            thumbnail: extention_academique_universite_alkhawayne_8,
        },
        {
            original: extention_academique_universite_alkhawayne_9,
            thumbnail: extention_academique_universite_alkhawayne_9,
        },
    
    
      
    ];
  

    return (
        <>
        
        <Typography variant='h4'  color='#424242' sx={{fontFamily: 'Montserrat, sans-serif', paddingTop:'48px', margin: '0 5%'}}>Construction de l’extension académique de l’université<br></br>Al Khawayne d’Ifrane</Typography>
        <div style={{ maxWidth: '800px', margin: '0 5%' ,paddingTop:'48px'}}>
    
        
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
        <Box sx={{paddingLeft:'4%', paddingTop:'48px'}}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
        <Avatar sx={{ bgcolor:'white'}}  > 
          📏
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=" Surface réalisée " secondary="10 000 m²" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
       
        <ListItemAvatar>
        <Avatar sx={{ bgcolor:'white'}}  > 
          🏙️
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=" Ville " secondary="Ifrane" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
        <Avatar sx={{ bgcolor:'white'}}  > 
          📚
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mission" secondary="Etude technique" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor:'white'}}  > 
          📅
          </Avatar >
        </ListItemAvatar>
        <ListItemText primary="Date" secondary="2022-2024" />
      </ListItem>
      <Divider variant="inset" component="li" />
    
    </List>
        </Box>
        <Footer />
        </>
    );
}
