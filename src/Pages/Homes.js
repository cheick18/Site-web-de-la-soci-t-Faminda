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
import { UseContext } from '../Services/UseContext';
import Loading from '../Components/Loading';







export default function Homes({t,i18n}) {
 
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
     <Header t={t} i18n={i18n} />
     <Typography variant='h5' align='center' color='#424242' sx={{fontFamily: 'Montserrat, sans-serif', paddingTop:'32px'}}>{t('Confiance Partagée avec Nos Partenaires')}</Typography>
   
   <Partenaire />
  
      {isSm&&( 
        <>
          <div style={{height:'500px', position:'relative',fontFamily: 'Montserrat, sans-serif'}} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <div style={{ width:'600px',position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
     <Typography variant='h5' align='center' color='#424242' sx={{fontFamily: 'Montserrat, sans-serif'}}>{t('Innovations pour un Monde Durable')}</Typography>
     <div style={{display:'block',height:'24px'}}></div>
     <Typography variant='body2'  align='center' color='#9e9e9e'  sx={{fontFamily: 'Montserrat, sans-serif'}} >{t('description')}</Typography>
     </div>
     </div>
     </>
    )}
     
     {isXs&&(
      <>
  
      </>
     )}
    
     <Text_image  t={t} i18n={i18n} />
     <FewServices  t={t} i18n={i18n} />

  {/**   <Video />*/} 
     <SpaceBetween />
     {isSm&&( <Typography variant='h4'  sx={{fontFamily: 'Montserrat, sans-serif', paddingBlockEnd:'48px',textAlign:'center'}}>{t('À Découvrir : Nos Projets')}</Typography>
  )}
      {isXs&&( <Typography variant='h5'  sx={{fontFamily: 'Montserrat, sans-serif', paddingBlockEnd:'48px',textAlign:'center'}}>{t('À Découvrir : Nos Projets')}</Typography>
  )}
     
     
    
   <Projects  t={t} i18n={i18n} />

   <Footer />
    </>
  )
}
