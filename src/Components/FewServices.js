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
  const services=[

    {
      path: '/etudes-architecturales-suivi-projets',
      title: 'Études architecturales et suivi des projets',
      image: service_etudes,
      body:{
        one:'Analyse technique et conception architecturale.',
        two:'Documents d’appui tels que plans, coupes, élévations et maquettes numériques.'
      }
    },
    {
      path: '/calcul-structures-batiments',
    title: 'Calcul de structures pour bâtiments à tous usages',
      image: service_travaux,
      body:{
        one:'Calcul de structures en béton armé, béton précontraint, charpente métallique et charpente en bois.',
        two:'Conception et dimensionnement pour des bâtiments résidentiels, industriels, commerciaux, éducatifs, médicaux et autres'
      }
    },
    {
      path: '/hydraulique-urbaine',
      title: 'Hydraulique urbaine',
      image: hydraulique_urbaine,
      body:{
        one:'Adduction et distribution d’eau',
        two:'Assainissement urbain, traitement de l’eau potable et épuration des eaux résiduaires'
      }
    },

    {
      path: '/ouvrages-d-art',
      title: 'Ouvrages d’art',
      image: service_travaux,
      body:{
        one:'Ponts, aqueducs, réservoirs et tunnels.',
        two:'Diagnostic d’ouvrages et contrôles non destructifs.'
      }
    },
    {
      path: '/barrages',
      title: 'Barrages',
      image: barages,
      body:{
        one:'Conception et construction de grands barrages et barrages collinaires.',
       
      }
    },

 
    
   
    
  
    // Ajoutez plus de services ici
  ];
    
  
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
        {isSm&&( <Grid  item md={12}  sx={{paddingBlockEnd:'64px'}}>   <Typography variant=  'h4'  sx={{fontFamily: 'Montserrat, sans-serif'}}>Decouvrez Notre Savoir Faire</Typography></Grid>
   )}
        {isXs&&( <Grid  item md={12}  sx={{paddingBlockEnd:'64px'}}>   <Typography variant=  'h5'  sx={{fontFamily: 'Montserrat, sans-serif'}}>Decouvrez Notre Savoir Faire</Typography></Grid>
   )}
        
        <Grid  item md={6}  xs={12} sx={{backgroundColor:'white'}}>
     <Link 
       key={services[0].index}
       to={services[0].path}
       state={{ title: services[0].title, image: services[0].image,body:services[0].body }}

     >
        <div style={{height: isSm?'424px':'250px', width:isXs?'100%':'500px',backgroundColor:'black',borderRadius:'8px', }} data-aos="fade-up" 
     data-aos-anchor-placement="bottom-bottom">
          <img src={service_etudes}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>

{isSm&&(<Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif', color:'secondary'}} >Études architecturales et suivi des projets</Typography>  
         )}
          {isXs&&(<Typography variant='h6' sx={{fontFamily: 'Montserrat, sans-serif', color:'secondary'}} >Études architecturales et suivi des projets</Typography>  
         )}
        </div>
        </Link>
       
        </Grid>
        <Grid  item md={6}  xs={12} sx={{alignItems:'end',position:'relative',top:isXs?'108px':'0'}}>
          <Link  key={services[0].index}
       to={services[1].path}
       state={{ title: services[1].title, image: services[1].image,body:services[1].body }}>
        <div style={{height:isXs?'250px':'608px', width:isXs?'100%':'500px',float:'right', borderRadius:'8px',backgroundColor:'black'}} data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     >  
          <img src={service_travaux}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>
        
        {isSm&&(<Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary',textDecoration:'underline'}} >Calcul de structure pour bâtiments à tous usages</Typography>
           )}
          {isXs&&(<Typography variant='h6' sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary',textDecoration:'underline'}} >Calcul de structure pour bâtiments à tous usages</Typography>
           )}
        </div>
        </Link>
        
            </Grid>
            <Grid  item md={12} xs={12}  sx={{display:'block',height:'148px'}}>

            </Grid>

            <Grid  item md={6} xs={12}  sx={{backgroundColor:'white', }}>
              <div style={{height:'90px', display:isXs?'block':'none'}}></div>
     <Link  key={services[2].index}
       to={services[2].path}
       state={{ title: services[2].title, image: services[2].image,body:services[2].body }}>
        <div style={{height:isXs?'250px':'608px', width:isXs?'100%':'500px',borderRadius:'8px', backgroundColor:'black' }}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <img src={hydraulique_urbaine}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>

{isSm&&( <Typography variant='h5'  sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary'}} >Hydraulique urbaine</Typography> )}
{isXs&&( <Typography variant='h6'  sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary'}} >Hydraulique urbaine</Typography> )}
           
        </div>
        </Link>
        </Grid>
        <Grid  item md={6}  sx={{alignItems:'end',position:'relative',top:isXs?'108px':'0'}}>
          <Link  key={services[4].index}
       to={services[4].path}
       state={{ title: services[4].title, image: services[4].image,body:services[4].body }}>
        <div style={{height: isSm?'424px':'250px', width:isXs?'100%':'500px',float:'right', borderRadius:'8px', backgroundColor:'black'}}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">  
          <img src={barages}  style={{width:'100%',height:'100%',borderRadius:'8px'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}/>
        
        {isSm&&(<Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary',textDecoration:'underline'}} >Barages</Typography>
           )}
             {isXs&&(<Typography variant='h6' sx={{fontFamily: 'Montserrat, sans-serif',color:'secondary',textDecoration:'underline'}} >Barages</Typography>
           )}
           
        </div>
        </Link>
            </Grid>



          
      </Grid>
  
  )
}
