import { Palette } from '@mui/icons-material';
import { Grid, Stack, Typography, useMediaQuery,Breadcrumbs, Divider, Fab } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoGloire from '../Components/logoGloire.png'
//import { MailOutline, Home, Fastfood, Palette, Category, ContactMail, PersonAdd, LockOpen } from '@mui/icons-material';


export default function Footer() {
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
        <Grid Item md={5} style={{padding:'0 4%'}}>
        <img src={logoGloire} alt="Logo" style={{ height: 100 , objectFit:'cover'}}  />
        <Typography variant='body2' textAlign='start' style={{color:'#bdbdbd',paddingBlockEnd:'16px',paddingLeft:'16px'}}>Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non </Typography>
        <Stack direction='row'spacing={1.5} style={{paddingLeft:'24px',paddingBlockEnd:'64px'}}>
        <Fab size="small" color="secondary" aria-label="add"><FacebookOutlinedIcon sx={{color:'white'}} /></Fab>
        <Fab size="small" color="secondary" aria-label="add"><InstagramIcon sx={{color:'white'}} /></Fab>
        <Fab size="small" color="secondary" aria-label="add"><LinkedInIcon sx={{color:'white'}} /></Fab>
        <Fab size="small" color="secondary" aria-label="add"><YouTubeIcon sx={{color:'white'}}/></Fab>
        </Stack>
        
        </Grid>
        <Grid item md={7}>


        </Grid>
        <Grid item md={12}  style={{padding:'0 15%'}}>
            <Stack direction='row' alignItems='center' justifyContent='space-around'>
            <Typography variant='h6' style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave} >Home</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6'style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Services</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6'style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>Réalisation</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6'style={{color:'white'}}> <Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>A propos</Link></Typography>
            <div style={{display:'block', height:'5px', width:'28px',background:'#bdbdbd'}}> </div>
            <Typography variant='h6' style={{color:'white'}}><Link style={{textDecoration:'none',color:'white'}} onMouseEnter={mouseenter} onMouseLeave={mouseleave}> Contactez nous</Link></Typography>
            </Stack>

            </Grid>
    <Grid md={12} style={{paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%'}}>
    <hr style={{opacity:0.1}}></hr>
  </Grid>
    <Grid  iTEM md={5} style={{paddingLeft:'5%'}}> 
    <Typography variant='subtitle2' style={{color:'#bdbdbd'}}>&copy; 2024 Faminda. Tous droits réservés.</Typography>
    </Grid>

</>)}
{

isXs &&(
  <>
   <Grid Item xs={12} style={{padding:'0 5%'}}>
   <img src={logoGloire} alt="Logo" style={{ height: 70 , objectFit:'cover'}}  />
        <Typography variant='body2' textAlign='center' style={{color:'#bdbdbd',paddingBlockEnd:'16px',paddingLeft:'16px'}}>Faminda est un bureau d’études spécialisé en génie civil et architecture. Nous offrons une gamme complète de services pour répondre aux besoins de nos clients dans divers domaines </Typography>
        <Stack direction='row'spacing={1.5} style={{paddingBlockEnd:'64px'}} justifyContent='center'>
        <Fab size="small" color="secondary" aria-label="add"><FacebookOutlinedIcon sx={{color:'white'}} /></Fab>
        <Fab size="small" color="secondary" aria-label="add"><InstagramIcon  sx={{color:'white'}}  /></Fab>
        <Fab size="small" color="secondary" aria-label="add"><LinkedInIcon  sx={{color:'white'}} /></Fab>
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
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center',color:'#bdbdbd' }}
          
          href="/material-ui/getting-started/installation/"
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
        >
       {/**    <Fastfood sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          Services
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
        
        >
   {/**     <Palette sx={{ mr: 0.5 }} fontSize="inherit" />  */}  
          Réalisations
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
        
        >
       {/**        <Palette sx={{ mr: 0.5 }} fontSize="inherit" />  */}  
          A propos
        </Link>
        <Link
          sx={{ display: 'flex', alignItems: 'center'}}
          style={{textDecoration:'none', textDecorationColor:'Highlight',color:'#bdbdbd'}}
        
        >
       {/**        <Palette sx={{ mr: 0.5 }} fontSize="inherit" />  */}  
          Contactez nous
        </Link>
        </Stack>
        <Stack direction='row' spacing={1}  style={{paddingBlockStart:'8px'}}>
      
     
        </Stack>
     
      </Grid>
      <Grid item  xs={12} style={{paddingTop:'6%',paddingLeft:'4%',paddingRight:'4%'}}>
    <hr style={{opacity:0.1}}></hr>
  </Grid>
    <Grid item  xs={12} style={{paddingLeft:'5%'}} > 
    <Typography variant='subtitle2' style={{color:'#bdbdbd'}}>&copy; 2024 Faminda. Tous droits réservés.</Typography>
    </Grid>
  </>
)

}
    </Grid>

    </>
  )
  
}
