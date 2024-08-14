import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
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






export default function Homes() {
    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <>
     <Header />
   
   <Partenaire />
      {isSm&&( 
        <>
          <div style={{height:'500px', position:'relative',fontFamily: 'Montserrat, sans-serif'}} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <div style={{ width:'600px',position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
     <Typography variant='h5' align='center' color='#424242' sx={{fontFamily: 'Montserrat, sans-serif'}}>Nous construisons l'avenir</Typography>
     <div style={{display:'block',height:'24px'}}></div>
     <Typography variant='body2'  align='center' color='#9e9e9e'  sx={{fontFamily: 'Montserrat, sans-serif'}} >Ut quos unde est voluptatem tempore 33 sunt impedit et tempora
consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
     </div>
     </div>
     </>
    )}
     
     {isXs&&(
      <>
  
      </>
     )}
    
     <Text_image />
     <FewServices />

     <Video />
     <SpaceBetween />
   <Projects />
   <Footer />
    </>
  )
}
