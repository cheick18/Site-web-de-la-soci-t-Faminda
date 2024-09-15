import { Box, Grid, Typography } from '@mui/material'

import description from '../Components/description.jpg'
import React from 'react'

import student_center_universite_alkhawayne_Ifrane_1 from '../images/projets/student_center_universite_alkhawayne_Ifrane_1.jpg'
import { useEffect } from 'react';
export default function About() {
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
              <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >À propos de Faminda</Typography>
                
              </div>
              
              </Box>

    </div>

    <Grid container sx={{paddingLeft:'4%',height:'400px',paddingTop:'98px'}}>
      <Grid item md={5} justifyContent='center' >
<Typography variant='h4' >Bienvenu chez Faminda</Typography>
<div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body3' align='center' style={{fontFamily:'Montserrat, sans-serif'}}>Faminda est un bureau d’études spécialisé en génie civil et architecture. Nous offrons une gamme complète de services pour répondre aux besoins de nos clients dans divers domaines</Typography>
<div style={{display:'block',height:'16px'}}></div>

      </Grid>
      <Grid item md={6} sx={{position:'relative', right:0}}>
        <div>
        <img src={student_center_universite_alkhawayne_Ifrane_1}  style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        </div>
    
        
        
        </Grid>

    </Grid>

    </div>
  )
}
