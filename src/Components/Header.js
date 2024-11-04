import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import slide2 from './slider2.jpg'
import MailIcon from '@mui/icons-material/Mail';
import slide3 from './slider3.jpg'
import slide1 from './slide1.jpg'
import App from './../App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';



export default function Header({t,i18n}) {
  
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <Carousel responsive={responsive}  infinite={true}
    autoPlay={true}
    autoPlaySpeed={10000}
    keyBoardControl={false}
    removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]}
    >


    <div   style={{height:'600px', position:'relative'}}  >
         <img src={slide2}  style={{width:'100%',height:'100%', objectFit:'cover',position:'relative'}} />
         <div style={{position:'relative',top:'-600px',padding:'0 4%'}}>
         <Grid container   >
         <Grid item md={6}  >

         <Box >
         <div style={{display:'block',height:'88px'}}></div> 
  
        <Typography variant="h1" style={{fontSize:'2.986rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold'}} >{t('Faminda Concept')}</Typography>
        <div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body' align='center' style={{color:'white',fontFamily: 'Montserrat, sans-serif'}}>{t('Faminda description')}</Typography>
<div style={{display:'block',height:'16px'}}></div>
<Link to='/contact' style={{textDecoration:'none'}}>
<Button size="large" variant='contained' color='primary' startIcon={<MailIcon />}>{t('Contactez-nous')}</Button>
</Link>
     </Box>
         </Grid>
         </Grid>
         </div>
      
    </div>
    
    <div   style={{position:'relative',height:'600px'}} >
         <img src={slide1}  style={{width:'100%',height:'100%', objectFit:'cover'}} />
         <div style={{position:'relative',top:'-600px',padding:'0 4%'}}>
         <Grid container   >
         <Grid item md={6}  >

         <Box >
   <div style={{display:'block',height:'88px'}}></div> 
        <Typography variant="h1" style={{fontSize:'2.986rem',color:'white',fontFamily:'Montserrat, sans-serif', fontWeight:'bold'}} >{t('Faminda Concept')}</Typography>
        <div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body3' align='center' style={{color:'white',fontFamily:'Montserrat, sans-serif'}}>{t('Faminda description')}</Typography>
<div style={{display:'block',height:'16px'}}></div>
<Link to='/contact' style={{textDecoration:'none'}}>
<Button size="large" variant='contained' color='primary' startIcon={<MailIcon />}>{t('Contactez-nous')}</Button>
</Link>
     </Box>
         </Grid>
         </Grid>
         </div>
      
    </div>
  
    </Carousel>
  )
}
