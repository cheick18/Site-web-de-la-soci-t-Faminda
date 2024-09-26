import { Box, Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material'

import description from '../Components/description.jpg'
import React from 'react'

import student_center_universite_alkhawayne_Ifrane_1 from '../images/projets/student_center_universite_alkhawayne_Ifrane_1.jpg'
import { useEffect } from 'react';
import Footer from '../Components/Footer';
export default function About() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  useEffect(() => {
    // Réinitialiser la position de défilement à 0
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);
  return (
    <div>
     
    
<div   style={{height:'470px', position:'relative'}}  >
        <img src={description}  style={{width:'100%',height:'100%', objectFit:'cover', opacity:1}} />  
         
            <Box style={{position:'absolute', top:0,display:'block', height:'470px',width:'100%'}}>
              {/*
              <div style={{ position:'absolute',top:'50%',transform:'translateY(-50%)',textAlign:'center',width:'100%'}}> 
              <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold'}} >Contactez-nous</Typography>
                
              </div>
              */}
           
          
              </Box>
              <Box sx={{backgroundColor:'#252C3C', height:'470px',display:'block', position:'absolute', top:0,zIndex:400, width:'100%',opacity:0.5}}>
             
              
              </Box>
              <Box sx={{backgroundColor:'transparent', height:'470px',display:'block', position:'absolute', top:0,zIndex:405, width:'100%',opacity:1}}>
              <div style={{ position:'absolute',top:'50%',transform:'translateY(-50%)',textAlign:'center',width:'100%'}}> 
                {isSm&&(  <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >À propos de Faminda</Typography>
                )}
              {isXs&&(  <Typography variant="h3" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >À propos de Faminda</Typography>
                )}
              </div>
              
              </Box>

    </div>

    <Grid container sx={{paddingLeft:'4%',height:'400px',paddingTop:'98px'}}>
      <Grid item md={7} style={{ display:'grid',justifyItems:'center',marginTop: 'auto 0'}} >
        <div>
<Typography variant='h4' >Bienvenu chez Faminda</Typography>
<div style={{display:'block',height:'24px'}}></div>
  
  
        <Typography variant='body3' align='center' style={{fontFamily:'Montserrat, sans-serif'}}>Faminda est un bureau d’études spécialisé en génie civil et architecture. Nous offrons une gamme complète de services pour répondre aux besoins de nos clients dans divers domaines</Typography>



<div style={{display:'block',height:'16px'}}></div>
</div>
      </Grid>
      <Grid item md={4} sx={{position:'relative', right:0}}>
      <div style={{ position: 'relative', width: '100%', paddingBlockStart: isXs ? '48px' : '0px' }}>
                <Card sx={{ width: '70%', height: '200px', position: 'absolute', right: 0 }}>
                  <CardContent>
                    <Typography color='secondary' variant='body2'>Ligne standard</Typography>
                    <Typography color='primary' variant='subtitle1'>+212 665 799 909</Typography>
                    <Typography color='secondary' variant='body2'>Email</Typography>
                    <Typography color='primary' variant='subtitle1'>contact@famindaconcept.com</Typography>
                    <Typography color='secondary' variant='body2'>Adresse</Typography>
                    <Typography color='primary' variant='subtitle1'>45 rue atlas etg4 n16 maarif Casablanca</Typography>
                  </CardContent>
                </Card>
              </div>
    
        
        
        </Grid>

    </Grid>
<Footer />
    </div>
  )
}
