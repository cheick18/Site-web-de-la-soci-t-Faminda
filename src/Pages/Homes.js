import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react'
import Header from '../Components/Header';
import Text_image from '../Components/Text_image';
import FewServices from '../Components/FewServices';
import Video from '../Components/Video';
import ProjetItem from '../Components/ProjetItem';
import SpaceBetween from '../Components/SpaceBetween';
import Projects from '../Components/Projects';
import '../App.css'
import Footer from '../Components/Footer';
import Partenaire from '../Components/Partenaire';







export default function Homes() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    useEffect(() => {
      // Réinitialiser la position de défilement à 0
      window.scrollTo(0, 0);
  
    
      return () => {
       
      };
    }, []);
    
  return (
    <>
     <Header />
     <Typography variant='h5' align='center' color='#424242' sx={{fontFamily: 'Montserrat, sans-serif', paddingTop:'32px'}}>Nos Partenaires de Référence</Typography>
   
   <Partenaire />
  
      {isSm&&( 
        <>
          <div style={{height:'500px', position:'relative',fontFamily: 'Montserrat, sans-serif'}} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <div style={{ width:'600px',position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
     <Typography variant='h5' align='center' color='#424242' sx={{fontFamily: 'Montserrat, sans-serif'}}>Innovations pour un Monde Durable</Typography>
     <div style={{display:'block',height:'24px'}}></div>
     <Typography variant='body2'  align='center' color='#9e9e9e'  sx={{fontFamily: 'Montserrat, sans-serif'}} >Chez Faminda Sarl, nous allions créativité et durabilité pour concevoir des espaces respectueux de l'environnement. En intégrant des matériaux écologiques et des solutions énergétiques optimisées, nous créons des projets à la fois fonctionnels et esthétiques. Découvrez comment nos innovations façonnent un avenir plus vert et durable </Typography>
     </div>
     </div>
     </>
    )}
     
     {isXs&&(
      <>
  
      </>
     )}
    
     <Text_image />
     <FewServices />

  {/**   <Video />*/} 
     <SpaceBetween />
   <Projects />
   <Footer />
    </>
  )
}
