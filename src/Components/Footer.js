import { Palette } from '@mui/icons-material';
import { Grid, Stack, Typography, useMediaQuery,Breadcrumbs, Divider, Fab } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoGloire from '../Components/logoGloire.png'
import { Link } from 'react-router-dom';

import { useState,useContext } from 'react';
import UserContext from '../Services/Context';


//import { MailOutline, Home, Fastfood, Palette, Category, ContactMail, PersonAdd, LockOpen } from '@mui/icons-material';


export default function Footer() {

  const phoneNumber = '+212655799909'; // Remplace par le numéro de téléphone
const whatsappLink = `https://wa.me/${phoneNumber}`;
const { t, i18n } = useTranslation();

    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    
      const styleD = {
          color:'#EB4038',
          fontWeight:'500',
       
         };
         const mouseenter=(event)=>{
        
         event.target.style.color="#bdbdbd";
      
         event.target.style.textDecoration='underline';

  
         }
         const mouseleave=(event)=>{
          event.target.style.color='white';
          event.target.style.textDecoration = 'none';
  
         }
  return (
    <>
    <div style={{display:'block',height:'88px'}} ></div>
    <Grid container sx={{bgcolor:'#212A39'}}style={{padding:'5% 0'}} >
      {isSm &&(<>
        <Grid item md={5} style={{padding:'0 4%'}}>
    <Link to='/'>   <img src={logoGloire} alt="Logo" style={{ height: 100 , objectFit:'cover'}}  /> </Link> 
        <Typography variant='body2' textAlign='start' style={{color:'#bdbdbd',paddingBlockEnd:'16px',paddingLeft:'16px'}}>{t('Faminda description')}</Typography>
        <Stack direction='row'spacing={1.5} style={{paddingLeft:'24px',paddingBlockEnd:'64px'}}>
        <Link to='https://www.facebook.com/share/GYZ47uADRJp9TLH7/?mibextid=qi2Omg' style={{textDecoration:'none'}}>   <Fab size="small" color="secondary" aria-label="add"><FacebookOutlinedIcon sx={{color:'white'}} /></Fab></Link>
        <Link to='https://www.instagram.com/famindaconcept' style={{textDecoration:'none'}}>   <Fab size="small" color="secondary" aria-label="add"><InstagramIcon sx={{color:'white'}} /></Fab></Link>
        <Link to={whatsappLink}> <Fab size="small" color="secondary" aria-label="add"> <WhatsAppIcon sx={{ color: 'white' }} /> </Fab></Link> 
        <Link to='https://www.linkedin.com/company/famindaconcept/'>  <Fab size="small" color="secondary" aria-label="add"><LinkedInIcon  sx={{color:'white'}} /></Fab></Link>
      
      
        <Fab size="small" color="secondary" aria-label="add"><YouTubeIcon sx={{color:'white'}}/></Fab>
        </Stack>
        
        </Grid>
        <Grid item md={7}>


        </Grid>
        <Grid item md={12}  style={{padding:'0 15%'}}>
            <Stack direction='row' alignItems='center' justifyContent='space-around'>
            <Typography variant='h6' style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}  to='/'>Home</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6'style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave} to='/calcul-structures-batiments'>Services</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6'style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave} to='/realisations'>{t('Réalisations')}</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6'style={{color:'white'}}> <Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave} to='/about'>{t('À propos')}</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6' style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave} to='/contact'>{t('Contactez-nous')} </Link></Typography>
            </Stack>

            </Grid>
    <Grid item md={12} style={{paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%'}}>
    <hr style={{opacity:0.1}}></hr>
  </Grid>
    <Grid  item md={5} style={{paddingLeft:'5%'}}> 
    <Typography variant='subtitle2' style={{color:'#bdbdbd'}}>&copy; 2024 Faminda  Concept. {t('Tous droits réservés')} | <Link to="https://www.linkedin.com/in/cheick-wague-622148212/" style={{textDecoration:'none',color:'gray'}}> By Cheick</Link></Typography>
  
  
    </Grid>

</>)}
{

isXs &&(
  <>
   <Grid item xs={12} style={{padding:'0 5%'}}>
   <Link to='/'>
   <img src={logoGloire} alt="Logo" style={{ height: 70 , objectFit:'cover'}}  />
   </Link>

        <Typography variant='body2' textAlign='center' style={{color:'#bdbdbd',paddingBlockEnd:'16px',paddingLeft:'16px'}}>{t('Faminda description')}</Typography>
        <Stack direction='row'spacing={1.5} style={{paddingBlockEnd:'64px'}} justifyContent='center'>
     <Link to='https://www.facebook.com/share/GYZ47uADRJp9TLH7/?mibextid=qi2Omg'> <Fab size="small" color="secondary" aria-label="add"><FacebookOutlinedIcon sx={{color:'white'}} /></Fab></Link>
      <Link to='https://www.instagram.com/famindaconcept'>  <Fab size="small" color="secondary" aria-label="add"><InstagramIcon  sx={{color:'white'}}  /></Fab></Link>
      <Link to={whatsappLink}> <Fab size="small" color="secondary" aria-label="add"> <WhatsAppIcon sx={{ color: 'white' }} /> </Fab></Link> 
     <Link to='https://www.linkedin.com/company/famindaconcept/'>  <Fab size="small" color="secondary" aria-label="add"><LinkedInIcon  sx={{color:'white'}} /></Fab></Link>
      
      
        <Fab size="small" color="secondary" aria-label="add"><YouTubeIcon  sx={{color:'white'}} /></Fab>
        </Stack>
        
        </Grid>
        <Grid item xs={12} style={{padding:'0 10%'}}>
     
          <Stack  direction='column' spacing={1} sx={{textAlign:'start'}}> 
        <Link
        
          sx={{ display: 'flex', alignItems: 'center' }}
       
          href="/"
           style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}>
      {/**Home sx={{ mr: 0.5 }} fontSize="inherit" /> */}    
          Home
        </Link>
        <Link    to='calcul-structures-batiments'
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center',color:'#bdbdbd' }}
          
        //  href="/material-ui/getting-started/installation/"
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
       
        >
       {/**    <Fastfood sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          Services
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
          to='realisations'
        
        >
   {/**     <Palette sx={{ mr: 0.5 }} fontSize="inherit" />  */}  
        {t(' Réalisations')}
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
        
        >
       {/**        <Palette sx={{ mr: 0.5 }} fontSize="inherit" />  */}  
       {(' À propos')} </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
        to='/contact'
        >
       {/**        <Palette sx={{ mr: 0.5 }} fontSize="inherit" />  */}  
          {t('Contactez-nous')}
        </Link>
        </Stack>
        <Stack direction='row' spacing={1}  style={{paddingBlockStart:'8px'}}>
      
     
        </Stack>
     
      </Grid>
      <Grid item  xs={12} style={{paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%'}}>
    <hr style={{opacity:0.1}}></hr>
  </Grid>
    <Grid item  xs={12} style={{paddingLeft:'5%'}} > 
    <Typography variant='subtitle2' style={{color:'#bdbdbd'}}>&copy; 2024 Faminda Concept. {t('Tous droits réservés')} | <Link to="https://www.linkedin.com/in/cheick-wague-622148212/" style={{textDecoration:'none',color:'gray'}}> By Cheick</Link></Typography>
    </Grid>
  </>
)

}
    </Grid>

    </>
  )
  
}
