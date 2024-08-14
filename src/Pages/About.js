import { Box, Grid, Typography } from '@mui/material'

import description from '../Components/description.jpg'
import React from 'react'


export default function About() {
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

    <Grid container>
      <Grid item md={5} >
<Typography variant='h4'>Bienvenu chez Faminda</Typography>
<div style={{display:'block',height:'24px'}}></div>
        <Typography variant='body3' align='center' style={{fontFamily:'Montserrat, sans-serif'}}>tempore 33 sunt impedit et tempora
consequatur qui enim magni. Et vero consequuntur et galisum 
consequatur ea magnam temporibus ut distinctio nihil id assumenda
quos non recusandae quae. Sit deleniti possimus ut obcae</Typography>
<div style={{display:'block',height:'16px'}}></div>

      </Grid>
      <Grid>
        
        </Grid>

    </Grid>

    </div>
  )
}
