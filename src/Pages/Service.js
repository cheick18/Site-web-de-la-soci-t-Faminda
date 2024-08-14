import { Avatar, Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import slide2 from '../Components/slider2.jpg'
import MailIcon from '@mui/icons-material/Mail';
import slide3 from '../Components/slider3.jpg'
import slide1 from '../Components/slide1.jpg'
import service_travaux from '../Components/service_travaux.jpg'
import Footer from '../Components/Footer';
import { Description } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import { useLocation } from 'react-router-dom';




export default function Services() {
  
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  
 
  const location = useLocation();
  const image =  location?.state? location.state.image : service_travaux;
  const title =   location?.state? location.state.title: 'Calcul de structures pour bâtiments à tous usages';
  const body= location?.state?  location?.state?.body:  {
    one:'Calcul de structures en béton armé, béton précontraint, charpente métallique et charpente en bois.',
    two:'Conception et dimensionnement pour des bâtiments résidentiels, industriels, commerciaux, éducatifs, médicaux et autres'
  }
  console.log("contenu du body envoyé", body)



  return (
    <>


      <div style={{ height: '470px', position: 'relative' }}  >
        <img src={slide2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        <Box style={{ position: 'absolute', top: 0, display: 'block', height: '470px', width: '100%' }}>
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }}>
            <Typography variant="h2" style={{fontSize: isSm? '2.488 rem':'2.30rem',color:'white',fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} >{title} </Typography>

          </div>


        </Box>

      </div>
      {/*

    <div  style={{height:'500px', position:'relative',fontFamily: 'Montserrat, sans-serif'}}>
    <div style={{ width:'600px',position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
  
     <Typography variant='body2'  align='center' color='#9e9e9e'  sx={{fontFamily: 'Montserrat, sans-serif'}} >Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
     </div>
    </div>
    

   */}
      <Grid container sx={{ padding: '0 4%', paddingTop: '128px', }}>
        <Grid item md={7}>
          <Box>
            <img src={image} style={{ width: '100%', height: '508px', borderRadius: '8px' }} />

          </Box>

        </Grid>
        <Grid item md={12}></Grid>
        <Grid item md={5} >
          <Grid container>
            { body?.one&&(
              <>

            <Grid item md={1} sx={{ paddingBlockStart: '48px' }} >
              <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
                <CheckIcon sx={{ width: 15, height: 15}} />


              </Avatar>

            </Grid>
            <Grid item md={11}  >

              <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif', paddingBlockStart: '48px' }} > {body?.one}</Typography>


            </Grid>
            <Grid item md={12}></Grid>
            </>

            )}
               {body?.two&&
                (<>
                  <Grid item md={1} sx={{ paddingBlockStart: '48px' }} >
            <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
            <CheckIcon sx={{ width: 15, height: 15}} />

              </Avatar>

            </Grid>
            <Grid item md={11}  >

              <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif', paddingBlockStart: '48px' }} > {body?.two}</Typography>


            </Grid>

                </>)
               }
               {/*
            <Grid item md={1} sx={{ paddingBlockStart: '48px' }} >
            <Avatar sx={{ backgroundColor: '#359AF2', width: 20, height: 20 }}>
            <CheckIcon sx={{ width: 15, height: 15}} />

              </Avatar>

            </Grid>
            <Grid item md={11}  >

              <Typography variant='body2' color='#9e9e9e' sx={{ fontFamily: 'Montserrat, sans-serif', paddingBlockStart: '48px' }} > Conception et dimensionnement pour des bâtiments résidentiels, industriels<br></br> commerciaux, éducatifs, médicaux et autres.</Typography>


            </Grid>
            */}




          </Grid>


        </Grid>


      </Grid>
      <Footer />


    </>
  )
}
