import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import SendIcon from '@mui/icons-material/Send';
import description from '../Components/description.jpg';
import { Box, Button, Card, CardContent, CircularProgress, Grid, TextField, Typography, useMediaQuery } from '@mui/material';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';




import Footer from '../Components/Footer';
import { useEffect } from 'react';
import { Modal  } from '@mui/base/Modal';
export default function Contact() {
  const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
      <div
        className={clsx({ 'base-Backdrop-open': open }, className)}
        ref={ref}
        {...other}
      />
    );
  });
  
  Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
  };
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;
  
  const ModalContent = styled('div')(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px
        ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  
      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }
  
      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
        margin-bottom: 4px;
      }
    `,
  );
  
  const TriggerButton = styled('button')(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
  
      &:active {
        background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
      }
  
      &:focus-visible {
        box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
        outline: none;
      }
    `,
  );
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [EMail, setEMail] = useState('');
  const [Message, setMessage] = useState('');
  const [organigrame, setOrganigrmae] = useState('');
  const [open, setOpen] = React.useState(false);
  const [loading,setLoading]=useState(false)
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Réinitialiser la position de défilement à 0
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);
  function validateEmailSyntax(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = async(event) => {

  
    if(!name||!lastName||!EMail||!message||validateEmailSyntax(EMail)==false){
      event.preventDefault();
      alert("Un problème est survenu. Veuillez vérifier vos informations et réessayer")
      console.log("une erreur c'est produite")
   

    }else{
    event.preventDefault(); // Empêche le rechargement de la page
    try {
      const response = await axios.post('https://backend-site-1h2m.onrender.com/request-reset', {
          name,
          lastName,
          number,
          EMail,
          Message,
          organigrame
      });
    //  console.log(response.data);
      handleOpen()
      setEMail('')
      setLastName('')
      setMessage('')
      setNumber('')
      setName('')
      
  } catch (err) {
      console.log('Failed to send message. Please try again.',err);
  }
}
}
  

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangePrenom = (event) => setLastName(event.target.value);
  const handleChangeNumber = (event) => setNumber(event.target.value);
  const handleChangeMessage = (event) => setMessage(event.target.value);
  const handleChangeMail = (event) => setEMail(event.target.value);
  const handleChangeOrganigrame = (event) => setOrganigrmae(event.target.value);

  const nom = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Nom<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const prenom = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Prenom<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const telephone = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Telephone<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const mail = <Typography component='p' sx={{ padding: 0, margin: 0 }}>E-mail<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;
  const message = <Typography component='p' sx={{ padding: 0, margin: 0 }}>Message<span style={{ color: '#359AF2', padding: '0', margin: 0 }}>*</span></Typography>;

  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 

  if(loading){
    return (
      <div style={{display:'block',backgroundColor:'red', margin:'auto'}}>

   
      <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open={loading}

>
  <CircularProgress color="inherit" />
</Backdrop>
</div>
    )
  }
 else{

 

  return (
    <>
     {open?(<> <Modal
    aria-labelledby="unstyled-modal-title"
    aria-describedby="unstyled-modal-description"
    open={open}
    onClose={handleClose}
    slots={{ backdrop: StyledBackdrop }}
  >
    <ModalContent sx={{ width: 400 }}>
    <h2 id="contact-modal-title" className="modal-title">
        Message envoyé avec succès !
    </h2>
      <p id="unstyled-modal-description" className="modal-description">
      Merci, votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.
      </p>
    </ModalContent>
  </Modal></>):( <><div style={{ height: '470px', position: 'relative' }}>
        <img src={description} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
        <Box style={{ position: 'absolute', top: 0, display: 'block', height: '470px', width: '100%' }}>
        </Box>
        <Box sx={{ backgroundColor: '#252C3C', height: '470px', display: 'block', position: 'absolute', top: 0, zIndex: 400, width: '100%', opacity: 0.5 }}>
        </Box>
        <Box sx={{ backgroundColor: 'transparent', height: '470px', display: 'block', position: 'absolute', top: 0, zIndex: 405, width: '100%', opacity: 1 }}>
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }}>
            {isSm&&(  <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >Contactez-nous</Typography>
         )}
             {isXs&&(  <Typography variant="h3" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >Contactez-nous</Typography>
         )}
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
                <Grid item md={12} xs={12} sx={{  paddingBlockStart: '40px' }}>
                  <TextField
                    label='organisme'
                    id="filled-size-small30"
                    value={organigrame}
                    onChange={handleChangeOrganigrame}
                    variant="outlined"
                    size="small"
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>

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
                    <Typography color='primary' variant='subtitle1'>+212 655 799 909</Typography>
                    <Typography color='secondary' variant='body2'>Email</Typography>
                    <Typography color='primary' variant='subtitle1'>contact@famindaconcept.com</Typography>
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
    )}
    {/*
    <TriggerButton type="button" onClick={handleOpen}>
        Open modal
      </TriggerButton>
      
       <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
        <h2 id="contact-modal-title" className="modal-title">
            Message envoyé avec succès !
        </h2>
          <p id="unstyled-modal-description" className="modal-description">
          Merci, votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.
          </p>
        </ModalContent>
      </Modal>
    {/** 
      <div style={{ height: '470px', position: 'relative' }}>
        <img src={description} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
        <Box style={{ position: 'absolute', top: 0, display: 'block', height: '470px', width: '100%' }}>
        </Box>
        <Box sx={{ backgroundColor: '#252C3C', height: '470px', display: 'block', position: 'absolute', top: 0, zIndex: 400, width: '100%', opacity: 0.5 }}>
        </Box>
        <Box sx={{ backgroundColor: 'transparent', height: '470px', display: 'block', position: 'absolute', top: 0, zIndex: 405, width: '100%', opacity: 1 }}>
          <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', textAlign: 'center', width: '100%' }}>
            {isSm&&(  <Typography variant="h2" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >Contactez-nous</Typography>
         )}
             {isXs&&(  <Typography variant="h3" style={{fontSize:'2.488 rem',color:'white',fontFamily: 'Montserrat, sans-serif',fontWeight:'bold',opacity:'1!important'}} >Contactez-nous</Typography>
         )}
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
                <Grid item md={12} xs={12} sx={{  paddingBlockStart: '40px' }}>
                  <TextField
                    label='organisme'
                    id="filled-size-small3"
                    value={EMail}
                    onChange={handleChangeMail}
                    variant="outlined"
                    size="small"
                    sx={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>

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
                    <Typography color='primary' variant='subtitle1'>contact@famindaconcept.com</Typography>
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
      */}
    </>
    
  );
}
}
