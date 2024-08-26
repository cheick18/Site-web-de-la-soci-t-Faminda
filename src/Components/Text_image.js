import { Box , Button, Grid, Typography, useMediaQuery} from '@mui/material'
import React from 'react'
import artchitect from './artchitect.png'
import modifArtchitect from './modifArtchitect.png'
import test from './test.jpg'




export default function Text_image({them}) {
  const isXs = useMediaQuery((them) => them.breakpoints.only('xs'));
  const isSm = useMediaQuery((them) => them.breakpoints.up('sm'))
  return (
    <Box sx={{}}>
      {isSm &&(
        <Grid container style={{padding:" 6% 4%",backgroundColor:'#EFEFEF'}} justifyContent='space-between' alignItems='center'>
            <Grid item md={5} sx={12}>
            <img
            src={modifArtchitect}
            alt="de l'image"
            style={{ width: '100%', height: '430px', borderRadius:8}}
          />
          </Grid>
          <Grid item md={5} sx={12} >
                <Typography variant='h5' sx={{fontFamily: 'Montserrat, sans-serif'}} > Nous Construisons L'avenir</Typography>
                <div style={{display:'block',height:'20px'}}></div>
                <Typography variant='body2' sx={{fontFamily: 'Montserrat, sans-serif'}} > quos unde est voluptatem tempore 33 sunt impedit et tempora consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda</Typography>
                <div style={{display:'block',height:'20px'}}></div>
<Button size="small"  variant='contained'  color='secondary' sx={{color:'white'}}>Contactez nous</Button>

            </Grid>

        </Grid>
      

      )}
      {
        isXs &&(
          <>
          <Grid contained style={{padding:" 8% 5%",backgroundColor:'#EFEFEF'}}>
            <Grid item sx={12}>
            <Typography variant='h5' style={{textAlign:'center',fontFamily: 'Montserrat, sans-serif'}}> Notre passion pour la cuisine</Typography>
                <div style={{display:'block',height:'20px'}}></div>
                <Typography variant='body2' style={{textAlign:'center',fontFamily: 'Montserrat, sans-serif'}}> quos unde est voluptatem tempore 33 sunt impedit et tempora consequatur qui enim magni. magnam temporibus ut distinctio nihil id assumenda</Typography>
                <div style={{display:'block',height:'20px'}}></div>


            </Grid>
            <Grid item sx={12}>
            <img
            src={artchitect}
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
