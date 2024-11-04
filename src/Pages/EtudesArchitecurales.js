import { Avatar, Box, Button, Grid, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import slide2 from '../Components/slider2.jpg'
import MailIcon from '@mui/icons-material/Mail';
import slide3 from '../Components/slider3.jpg'
import slide1 from '../Components/slide1.jpg'

import Footer from '../Components/Footer';
import { Description } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import  service_travaux from '../images/service_travaux.jpg'
import  service_etudes from '../images/service_etudes.jpg'
import  etudes from '../images/etudes.jpg'
import  hydraulique_urbaine from '../images/hydraulique_urbaine.jpg';
import  routes_autoriutes_transports from '../images/routes_autoriutes_transports.jpg';
import  ouvrage from '../images/ouvrage.jpg';
import  barrages from '../images/barrages.jpg';
import  travaux_genie_defense from '../images/travaux_genie_defense.jpg';
import  voirie_reseau from '../images/voirie_reseau.jpg';
import  reseau_fluides from '../images/reseau_fluides.jpg';
import  etude_impact_envirornement from '../images/etude_impact_envirornement.jpg';
import  travaux_maritimes from '../images/travaux_maritimes.jpg';
import  securité from '../images/securité.jpg';




export default function Services({t,i18n}) {
  
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
  {isSm&&(  <>


    <div style={{ height: '470px', position: 'relative' }}  >
      <img src={slide2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      <Box style={{ position: 'absolute', top: 0, display: 'block', height: '470px', width: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }}>
        {isSm&&(    <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} >{t('Études architecturales et suivi des projets')}</Typography>

)}
    {isXs&&(  <Typography variant="h3" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} >{t('Études architecturales et suivi des projets')}</Typography>

)}

        </div>


      </Box>

    </div>

    <Grid container sx={{ padding: '0 4%', paddingTop: '128px', }}>
      <Grid item md={7}>
        <Box>
          <img src={service_etudes} style={{ width: '100%', height: '508px', borderRadius: '8px' }} />

        </Box>

      </Grid>
      <Grid item md={12}></Grid>
      <Grid item md={5} >
        <Grid container>
        
            <>

          <Grid item md={1} sx={{ paddingBlockStart: '48px' }} >
            <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
              <CheckIcon sx={{ width: 15, height: 15}} />


            </Avatar>

          </Grid>
          <Grid item md={11}  >

            <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif', paddingBlockStart: '48px' }} >{t('Études architecturales1')}</Typography>


          </Grid>
          <Grid item md={12}></Grid>
          </>


            
                <Grid item md={1} sx={{ paddingBlockStart: '48px' }} >
          <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
          <CheckIcon sx={{ width: 15, height: 15}} />

            </Avatar>

          </Grid>
          <Grid item md={11}  >

            <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif', paddingBlockStart: '48px' }} >{t('Études architecturales2')}</Typography>


          </Grid>

            
        




        </Grid>


      </Grid>


    </Grid>
    <Footer />


  </>)}
  

{isXs&&(<>


<div style={{ height: '470px', position: 'relative' }}  >
  <img src={slide2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

  <Box style={{ position: 'absolute', top: 0, display: 'block', height: '470px', width: '100%' }}>
    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }}>

    {isSm&&(    <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} >{t('Études architecturales et suivi des projets')}</Typography>

         )}
             {isXs&&(  <Typography variant="h3" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} >{t('Études architecturales et suivi des projets')}</Typography>

         )}
     
    </div>


  </Box>

</div>

<Grid container sx={{ padding: '0 4%', paddingTop: '128px', }}>
  <Grid item md={7}>
    <Box>
      <img src={service_etudes} style={{ width: '100%', height: '300px', borderRadius: '8px' }} />

    </Box>

  </Grid>
  <Grid item md={12}></Grid>
  <Grid item md={5} >
    <Grid container>
    
        <>

     
        <Grid item md={11}  >
        {/**  <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
          <CheckIcon sx={{ width: 15, height: 15}} />


        </Avatar> */}
           <Box sx={{ display: 'flex', alignItems: 'center', paddingBlockStart: '48px' }}>
           <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
           <CheckIcon sx={{ width: 15, height: 15}} />
           </Avatar>
        
      <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif' ,paddingLeft:'10px'}}>{t('Études architecturales1')}</Typography>
    </Box>
 


      </Grid>
      <Grid item md={12}></Grid>
      </>

   
      
       
      <Grid item md={11}  >

<Box sx={{ display: 'flex', alignItems: 'center', paddingBlockStart: '38px' }}>
   <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
   <CheckIcon sx={{ width: 15, height: 15}} />
   </Avatar>


   <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif', paddingBlockStart: '48px',paddingLeft:'10px',paddingBottom:'40px' }} >{t('Études architecturales2')}</Typography>

</Box>

</Grid>

       




    </Grid>


  </Grid>


</Grid>
<Footer />


</>)}


    </>
  )
}
