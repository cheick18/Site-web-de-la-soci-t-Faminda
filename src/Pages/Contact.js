import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import SendIcon from '@mui/icons-material/Send';
import description from '../Components/description.jpg';
import { Box, Button, Card, CardContent, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [EMail, setEMail] = useState('');
  const [Message, setMessage] = useState('');
  useEffect(() => {
    // Réinitialiser la position de défilement à 0
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    alert('Vous avez cliqué sur le formulaire');
    console.log('Message:', Message); // Utilise la variable correcte

    // Ici, tu peux envoyer la valeur à ton serveur ou effectuer une autre action
  };

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangePrenom = (event) => setLastName(event.target.value);
  const handleChangeNumber = (event) => setNumber(event.target.value);
  const handleChangeMessage = (event) => setMessage(event.target.value);
  const handleChangeMail = (event) => setEMail(event.target.value);

  const nom = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Nom<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const prenom = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Prenom<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const telephone = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Telephone<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const mail = <Typography component='p' sx={{ padding: 0, margin: 0 }}>E-mail<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const message = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Message<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;

  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <>
      <div style={{ height: '470px', position: 'relative' }}>
        <img src={description} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
        <Box style={{ position: 'absolute', top: 0, display: 'block', height: '470px', width: '100%' }}>
        </Box>
        <Box sx={{ backgroundColor: '#252C3C', height: '470px', display: 'block', position: 'absolute', top: 0, zIndex: 400, width: '100%', opacity: 0.5 }}>
        </Box>
        <Box sx={{ backgroundColor: 'transparent', height: '470px', display: 'block', position: 'absolute', top: 0, zIndex: 405, width: '100%', opacity: 1 }}>
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }}>
          <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >Contactez-nous</Typography>
          </div>
        </Box>
      </div>

      <section>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ padding: isSm ? '4% 4%' : '4% 6%' }}>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <TextField
                    label={nom}
                    id="filled-size-small"
                    value={name}
                    onChange={handleChangeName}
                    variant="outlined"
                    size="small"
                    sx={{ width: isSm ? '90%' : '100%' }}
                    key={1}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ textAlign: isSm ? 'end' : 'start', paddingBlockStart: isXs ? '40px' : '0px' }}>
                  <TextField
                    label={prenom}
                    value={lastName}
                    onChange={handleChangePrenom}
                    id="filled-size-small1"
                    variant="outlined"
                    size="small"
                    sx={{ width: isSm ? '90%' : '100%' }}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ paddingBlockStart: '40px' }}>
                  <TextField
                    label={telephone}
                    id="filled-size-small2"
                    value={number}
                    onChange={handleChangeNumber}
                    variant="outlined"
                    size="small"
                    sx={{ width: isSm ? '90%' : '100%' }}
                    key={2}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ textAlign: 'end', paddingBlockStart: '40px' }}>
                  <TextField
                    label={mail}
                    id="filled-size-small3"
                    value={EMail}
                    onChange={handleChangeMail}
                    variant="outlined"
                    size="small"
                    sx={{ width: isSm ? '90%' : '100%' }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sx={{ paddingBlockStart: '40px' }}>
                  <TextField
                    label={message}
                    id="filled-size-small4"
                    value={Message}
                    onChange={handleChangeMessage}
                    variant="outlined"
                    size="small"
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Box sx={{ paddingBlockStart: '48px' }}>
                  <Button type="submit" size="medium" variant='contained' color='primary' startIcon={<SendIcon />}>
                    Envoyez
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <div style={{ position: 'relative', width: '100%', paddingBlockStart: isXs ? '48px' : '0px' }}>
                <Card sx={{ width: '70%', height: '200px', position: 'absolute', right: 0 }}>
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
        </form>
      </section>
      <div style={{ display: isXs ? 'block' : 'none', height: '208px' }}></div>
      <Footer />
    </>
  );
}
