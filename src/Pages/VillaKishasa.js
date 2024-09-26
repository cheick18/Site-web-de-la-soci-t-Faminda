import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importer les styles par défaut

import villa_unifamiliale_Kinshasa_1 from '../images/projets/villa_unifamiliale_Kinshasa_1.png'
import villa_kinshasa_2 from '../images/projets/villa_kinshasa_2.png'
import villa_unifamiliale_Kinshasa_2 from '../images/projets/villa_unifamiliale_Kinshasa_2.png'
import immeuble_appartement_R3_Kinshasa_1 from '../images/projets/immeuble_appartement_R3_Kinshasa_1.jpg'


import immeuble_appartement_R3_Kinshasa_2 from '../images/projets/immeuble_appartement_R3_Kinshasa_2.jpg'
import immeuble_appartement_R3_Kinshasa_3 from '../images/projets/immeuble_appartement_R3_Kinshasa_3.jpg'
import immeuble_appartement_R3_Kinshasa_4 from '../images/projets/immeuble_appartement_R3_Kinshasa_4.jpg'
import immeuble_appartement_R3_Kinshasa_5 from '../images/projets/immeuble_appartement_R3_Kinshasa_5.jpg'
import immeuble_appartement_R3_Kinshasa_6 from '../images/projets/immeuble_appartement_R3_Kinshasa_6.jpg'
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


//immeuble_appartement_R3_Kinshasa_2
export default function DetailRealisation() {
    const galleryRef = useRef(null); // Référence au composant ImageGallery

    const images = [
        {
            original: villa_unifamiliale_Kinshasa_1,
            thumbnail: villa_unifamiliale_Kinshasa_1,
        },
        {
            original: villa_kinshasa_2,
            thumbnail: villa_kinshasa_2,
        },
        {
            original: villa_unifamiliale_Kinshasa_2,
            thumbnail: villa_unifamiliale_Kinshasa_2,
        },
    
    
   
   
   
   
  
  
    ];
    //construction-centreculturel-Berkane.html

    return (
        <>
             <Typography variant='h4'  color='#424242' sx={{fontFamily: 'Montserrat, sans-serif', paddingTop:'48px', margin: '0 5%'}}>Construction d’une villa unifamiliale<br></br> à Kinshasa</Typography>
       
        <div style={{ maxWidth: '800px', margin: '0 5%', paddingTop:'48px' }}>
         
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
        <ListItemText primary=" Surface réalisée " secondary="3 000 m²" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
       
        <ListItemAvatar>
        <Avatar sx={{ bgcolor:'white'}}  > 
          🏙️
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary=" Ville " secondary="Kinshasa" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
        <Avatar sx={{ bgcolor:'white'}}  > 
          📚
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mission" secondary="Conception architecturale, Etudes techniques et OPC" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor:'white'}}  > 
          📅
          </Avatar >
        </ListItemAvatar>
        <ListItemText primary="Date" secondary="2019-2022" />
      </ListItem>
      <Divider variant="inset" component="li" />
    
    </List>
        </Box>
        <Footer />
        </>
    );
}
