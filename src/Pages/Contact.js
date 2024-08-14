import React from 'react'
import Navbar from '../Components/Navbar'
import SendIcon from '@mui/icons-material/Send';

import slide1 from '../Components/slide1.jpg';

import description from '../Components/description.jpg'
import { Box, Button, Card, CardContent, Grid, TextField, Typography, useMediaQuery } from '@mui/material'
import Footer from '../Components/Footer';


export default function Contact() {
  const nom=<Typography  component='p' sx={{padding:0,margin:0}}>Nom<span style={{color:'#359AF2', padding:'0',margin:0}}>*</span></Typography>
  const prenom=<Typography  component='p' sx={{padding:0,margin:0}}>Prenom<span style={{color:'#359AF2', padding:'0',margin:0}}>*</span></Typography>
  
  const telephone=<Typography  component='p' sx={{padding:0,margin:0}}>Telephone<span style={{color:'#359AF2', padding:'0',margin:0}}>*</span></Typography>
  
  const mail=<Typography  component='p' sx={{padding:0,margin:0}}>E-mail<span style={{color:'#359AF2', padding:'0',margin:0}}>*</span></Typography>
  
  const message=<Typography  component='p' sx={{padding:0,margin:0}}>Message<span style={{color:'#359AF2', padding:'0',margin:0}}>*</span></Typography>
  
  

  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  
  
  return (
    <>

    
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
              <Typography variant="h2" style={{fontSize: isSm? '2.488 rem':'2.30rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >Contactez-nous</Typography>
                
              </div>
              
              </Box>

    </div>


    <section>
      <Grid container sx={{padding: isSm?'4% 4%':'4% 6%'}}>
        <Grid item md={6} xs={12} >
          <Grid container > 
          <Grid item md={6} xs={12}  >
          <TextField
          label={nom}
          id="filled-size-small"
          
          variant="outlined"
          size="small"
           sx={{width:isSm?'90%':'100%'}}
        />
            </Grid>
            <Grid item md={6}  xs={12}  sx={{textAlign:isSm?'end':'start', paddingBlockStart:isXs?'40px':'0px'}} >
            <TextField
         label={prenom}
          id="filled-size-small"
          
          variant="outlined"
          size="small"
          sx={{width:isSm?'90%':'100%'}}
        />
            </Grid>
            <Grid item md={6} xs={12} sx={{paddingBlockStart:'40px'}} >
            <TextField
          label={telephone}
          id="filled-size-small"
          
          variant="outlined"
          size="small"
          sx={{width:isSm?'90%':'100%'}}
        />
            </Grid>
            <Grid item md={6} xs={12}  sx={{textAlign:'end',paddingBlockStart:'40px'}} >
            <TextField
           label={mail}
          id="filled-size-small"
          
          variant="outlined"
          size="small"
          sx={{width:isSm?'90%':'100%'}}
        />
            </Grid> 
            <Grid item  md={12} xs={12}  sx={{paddingBlockStart:'40px'}} >
            <TextField
          label={message}
          id="filled-size-small"
          
          variant="outlined"
          size="small"
          sx={{width:'100%'}}
        />
            </Grid> 
            <Box sx={{paddingBlockStart:'48px'}}>
            <Button size="medium" variant='contained' color='primary' startIcon={<SendIcon/>}  >Envoyez</Button>
            </Box>
          
            

          </Grid>
     
   
        </Grid>
        <Grid item md={6}  xs={12}>
          <div style={{position:'relative', width:'100%',paddingBlockStart:isXs?'48px':'0px'}}>
          <Card  sx={{width:'70%', height:'200px',position:'absolute', right:0}}>
            <CardContent>
            <Typography color='secondary' variant='body2'>Ligne standard</Typography>
            <Typography color='primary' variant='subtitle1'>+212 665 799 909</Typography>
            <Typography color='secondary' variant='body2'>Email</Typography>
            <Typography color='primary' variant='subtitle1'>famindaconcept@gmail.com</Typography>
            <Typography color='secondary' variant='body2'>Adresse</Typography>
            <Typography color='primary' variant='subtitle1'>45 rue atlas etg4 n16 maarif Casablanca</Typography>



            </CardContent>
          
        </Card>

          </div>
     
</Grid>

      </Grid>
    </section>
    <div style={{display:isXs?'block':'none',height:'208px'}}></div>
    <Footer />
    </>
   
  )
}
