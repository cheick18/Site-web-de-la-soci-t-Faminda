import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import service_travaux from '../Components/service_travaux.jpg'
import service_etudes from '../Components/service_etudes.jpg'
import barages from '../images/barrages.jpg'
import hydraulique_urbaine from '../images/hydraulique_urbaine.jpg'



export default function () {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation (en ms)
      easing: 'ease-in-out', // Type d'animation
      once: true // Répéter l'animation une seule fois
    });
  }, []);

  const mouseenter=(event)=>{
        
    event.target.style.opacity=0.4;


    }
    const mouseleave=(event)=>{
  
      event.target.style.opacity=1;

    }


  return (
  
 
      <Grid container sx={{padding:'108px 4%'}}>
         <Grid  item md={12}  sx={{paddingBlockEnd:'64px'}}>   <Typography variant='h4'  sx={{fontFamily: 'Montserrat, sans-serif'}}>Decouvrez notre savoir faire</Typography></Grid>
   
        <Grid  item md={6}  xs={12} sx={{backgroundColor:'white'}}>
     <Link to=''>
        <div style={{height:'424px', width:isXs?'100%':'500px',backgroundColor:'black',borderRadius:'8px', }} data-aos="fade-up" 
     data-aos-anchor-placement="bottom-bottom">
          <img src={service_etudes}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>

           <Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif', color:'secondary'}} >Études architecturales et suivi des projets</Typography>  
         
        </div>
        </Link>
       
        </Grid>
        <Grid  item md={6}  xs={12} sx={{alignItems:'end',position:'relative',top:isXs?'108px':'0'}}>
          <Link to='/Service'>
        <div style={{height:isXs?'424px':'608px', width:isXs?'100%':'500px',float:'right', borderRadius:'8px',backgroundColor:'black'}} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     >  
          <img src={service_travaux}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>
        
          <Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary',textDecoration:'underline'}} >Calcul de structure pour bâtiments à tous usages</Typography>
            
        </div>
        </Link>
        
            </Grid>
            <Grid  item md={12} xs={12}  sx={{display:'block',height:'148px'}}>

            </Grid>

            <Grid  item md={6} xs={12}  sx={{backgroundColor:'white', }}>
              <div style={{height:'90px', display:isXs?'block':'none'}}></div>
     <Link to=''>
        <div style={{height:isXs?'424px':'608px', width:isXs?'100%':'500px',borderRadius:'8px', backgroundColor:'black' }}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <img src={hydraulique_urbaine}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>

           <Typography variant='h5'  sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary'}} >Hydraulique urbaine</Typography>  
        </div>
        </Link>
        </Grid>
        <Grid  item md={6}  sx={{alignItems:'end',position:'relative',top:isXs?'108px':'0'}}>
          <Link to=''>
        <div style={{height:'424px', width:isXs?'100%':'500px',float:'right', borderBlockEnd:'8px', backgroundColor:'black'}}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">  
          <img src={barages}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>
        
          <Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary',textDecoration:'underline'}} >Barages</Typography>
            
        </div>
        </Link>
            </Grid>



          
      </Grid>
  
  )
}
