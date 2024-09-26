import { Box , Button, Grid, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import artchitect from './artchitect.png'
import modifArtchitect from './modifArtchitect.png'
import test from './test.jpg'
import { Link } from 'react-router-dom'




export default function Text_image({them}) {
  const isXs = useMediaQuery((them) => them.breakpoints.only('xs'));
  const isSm = useMediaQuery((them) => them.breakpoints.up('sm'))
  return (
    <Box sx={{}}>
      {isSm &&(
        <Grid container style={{padding:" 6% 4%",backgroundColor:'#EFEFEF'}} justifyContent='space-between' alignItems='center'>
            <Grid item md={5} sx={12}>
            <img
            src='https://images.pexels.com/photos/5324975/pexels-photo-5324975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="de l'image"
            style={{ width: '100%', height: '430px', borderRadius:8}}
          />
          </Grid>
          <Grid item md={5} sx={12} >
                <Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif'}} > Nous Construisons L'avenir</Typography>
                <div style={{display:'block',height:'20px'}}></div>
                <Typography variant='body2' sx={{fontFamily: 'Montserrat, sans-serif'}} >Faminda est un bureau d’études spécialisé en génie civil et architecture. Nous offrons une gamme complète de services pour répondre aux besoins de nos clients dans divers domaines</Typography>
                <div style={{display:'block',height:'20px'}}></div>
 <Link to='/contact'><Button size="small"  variant='contained'  color='secondary' sx={{color:'white'}}>Contactez-nous</Button></Link> 

            </Grid>

        </Grid>
      

      )}
      {
        isXs &&(
          <>
          <Grid contained style={{padding:" 8% 5%",backgroundColor:'#EFEFEF'}}>
            <Grid item sx={12}>
            <Typography variant='h5' style={{textAlign:'center',fontFamily: 'Montserrat, sans-serif'}}> Nous Construisons L'avenir</Typography>
                <div style={{display:'block',height:'20px'}}></div>
                <Typography variant='body2' style={{textAlign:'center',fontFamily: 'Montserrat, sans-serif'}}>Chez Faminda Sarl, nous allions créativité et durabilité pour concevoir des espaces respectueux de l'environnement. En intégrant des matériaux écologiques et des solutions énergétiques optimisées, nous créons des projets à la fois fonctionnels et esthétiques. Découvrez comment nos innovations façonnent un avenir plus vert et durable</Typography>
                <div style={{display:'block',height:'20px'}}></div>


            </Grid>
            <Grid item sx={12}>
            <img
            src='https://images.pexels.com/photos/5324975/pexels-photo-5324975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="de l'image"
            style={{ width: '100%', height: '430px',borderRadius:'8px'}}
          />

            </Grid>

          </Grid>
          </>
        )
      }
      
    </Box>
  )
}
