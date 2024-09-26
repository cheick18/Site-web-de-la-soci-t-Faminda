import React, { useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Importer les styles par défaut


import Ecole_verte_zenata_3 from '../images/projets/Ecole_verte_zenata_3.jpeg'
import Ecole_verte_zenata_1 from '../images/projets/Ecole_verte_zenata_1.jpeg'
import Ecole_verte_zenata_2 from '../images/projets/Ecole_verte_zenata_2.jpeg'
import waga from '../images/projets/waga.png'


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
import { useEffect } from 'react';

export default function DetailRealisation() {
    const galleryRef = useRef(null); // Référence au composant ImageGallery
    useEffect(() => {
      // Réinitialiser la position de défilement à 0
      window.scrollTo(0, 0);
  
    
      return () => {
       
      };
    }, []);

    const images = [
        {
            original: Ecole_verte_zenata_3,
            thumbnail: Ecole_verte_zenata_3,
        },
        {
          original: Ecole_verte_zenata_1,
          thumbnail: Ecole_verte_zenata_1,
        },
        {
          original: Ecole_verte_zenata_2,
          thumbnail: Ecole_verte_zenata_2,
        },
    
      
  
  
    ];
    //construction-centreculturel-Berkane.html

    return (
        <>
        <Typography variant='h4'  color='#424242' sx={{fontFamily: 'Montserrat, sans-serif', paddingTop:'48px', margin: '0 5%'}}>Ecole Verte Zenata - Primaire - Collége - Lycée</Typography>
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
         <ListItemText primary=" Surface réalisée " secondary="3.2 Ha" />
       </ListItem>
       <Divider variant="inset" component="li" />
       <ListItem>
        
         <ListItemAvatar>
         <Avatar sx={{ bgcolor:'white'}}  > 
           🏙️
           </Avatar>
         </ListItemAvatar>
         <ListItemText primary=" Ville " secondary="Cablanca" />
       </ListItem>
       <Divider variant="inset" component="li" />
       <ListItem>
         <ListItemAvatar>
         <Avatar sx={{ bgcolor:'white'}}  > 
           📚
             
           </Avatar>
         </ListItemAvatar>
         <ListItemText primary="Mission" secondary="Étude technique" />
       </ListItem>
       <Divider variant="inset" component="li" />
       <ListItem>
         <ListItemAvatar>
           <Avatar sx={{ bgcolor:'white'}}  > 
           📅
           </Avatar >
         </ListItemAvatar>
         <ListItemText primary="Date" secondary="2019-2021" />
       </ListItem>
       <Divider variant="inset" component="li" />
     
     </List>
         </Box>
         <Footer />
         </>
    );
}
