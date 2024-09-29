import { AppBar, Box, Button, Drawer, IconButton, List, Menu, MenuItem, Stack, ThemeProvider, Toolbar, useMediaQuery } from '@mui/material'
import React from 'react'
import new_logo_faminda from '../images/new_logo_faminda.png'
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MailIcon from '@mui/icons-material/Mail';
import { UseContext } from '../Services/UseContext'

import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import logo from '../Components/logo.png'
 import logoGloire from './logoGloire.png'

import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

import  service_travaux from '../images/service_travaux.jpg'
import  service_etudes from '../images/service_etudes.jpg'
import  etudes from '../images/etudes.jpg'
import  hydraulique_urbaine from '../images/hydraulique_urbaine.jpg';
import  routes_autoriutes_transports from '../images/routes_autoriutes_transports.jpg';
import  ouvrage from '../images/ouvrage.jpg';
import  barrages from '../images/barrages.jpg';
import  travaux_genie_defense from '../images/travaux_genie_defense.jpg';
import  voirie_reseau from '../images/voirie_reseau.jpg';
import  reseau_fluides from '../images/reseau_fluides.jpg';
import  etude_impact_envirornement from '../images/etude_impact_envirornement.jpg';
import  travaux_maritimes from '../images/travaux_maritimes.jpg';
import  securité from '../images/securité.jpg';




export default function Navbar() {


  
 
    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
    const isMd = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [anchorElLangue, setAnchorElLangue] = React.useState(null);
    const openLangue = Boolean(anchorElLangue);
    const handleClickLangue = (event) => {
      setAnchorElLangue(event.currentTarget);
    };
    const handleCloseLangue = () => {
      setAnchorElLangue(null);
    };

    /* section drwer */
    const [openDrawer, setOpenDrawer] = React.useState(false);
    
      const [openList, setOpenList] = React.useState(false);

  const handleClickList = () => {
    setOpenList(!openList);
  };
     

  const routeState = {
    image: service_travaux,
    title: 'Calcul de structure pour bâtiments à tous usages'
  }
const services=[
  {
    path: '/calcul-structures-batiments',
    title: 'Calcul de structures pour bâtiments à tous usages',
    image: service_travaux,
    body:{
      one:'Calcul de structures en béton armé, béton précontraint, charpente métallique et charpente en bois.',
      two:'Conception et dimensionnement pour des bâtiments résidentiels, industriels, commerciaux, éducatifs, médicaux et autres'
    }
  },
  {
    path: '/etudes-architecturales-suivi-projets',
    title: 'Études architecturales et suivi des projets',
    image: service_etudes,
    body:{
      one:'Analyse technique et conception architecturale.',
      two:'Documents d’appui tels que plans, coupes, élévations et maquettes numériques.'
    }
  },
  {
    path: '/etudes-generales',
    title: 'Études générales',
    image: etudes,
    body:{
      one:'Planification, gestion de projet, économie, sociologie, météorologie, impact environnemental et qualité',
      two:'Formation des ressources humaines et mise à niveau.'
    }
  },
  {
    path: '/hydraulique-urbaine',
    title: 'Hydraulique urbaine',
    image: hydraulique_urbaine,
    body:{
      one:'Adduction et distribution d’eau',
      two:'Assainissement urbain, traitement de l’eau potable et épuration des eaux résiduaires'
    }
  },
  {
    path: '/routes-autoroutes-transports',
    title: 'Routes, autoroutes et transports',
    image: routes_autoriutes_transports,
    body:{
      one:'Conception et planification de routes, autoroutes et voies ferrées.',
      two:'Infrastructures aéroportuaires et petits ouvrages (ponceaux, dalots).'
    }
  },
  {
    path: '/ouvrages-d-art',
    title: 'Ouvrages d’art',
    image: ouvrage,
    body:{
      one:'Ponts, aqueducs, réservoirs et tunnels.',
      two:'Diagnostic d’ouvrages et contrôles non destructifs.'
    }
  },
  {
    path: '/barrages',
    title: 'Barrages',
    image: barrages,
    body:{
      one:'Conception et construction de grands barrages et barrages collinaires.',
     
    }
  },
  {
    path: '/travaux-maritimes-fluviaux',
    title: 'Travaux maritimes et fluviaux',
    image: travaux_maritimes,
    body:{
      one:'Ports maritimes et fluviaux.',
      two:'Aménagement des cours d’eau.'
    }
  },
  {
    path: '/travaux-genie-defense-caractere-specific',
    title: 'Travaux du génie de défense à caractère spécifique',
    image: travaux_genie_defense,
    body:{
      one:'Construction d’abris et de fortifications.',
      two:'Soutien logistique, mobilité tactique et contre-mobilité.'
    }
  },
  {
    path: '/reseaux-fluides-batiments',
    title: 'Réseaux des fluides pour bâtiments',
    image: reseau_fluides,
    body:{
      one:'Conception et entretien des infrastructures routières et des réseaux d’assainissement.',
      two:'Approvisionnement en eau potable.'
    }
  },
  {
    path: '/voirie-reseaux-assainissement-eau-potable',
    title: 'Voirie, réseaux d’assainissement et eau potable',
    image: voirie_reseau,
    body:{
      one:'Adduction et distribution d’eau',
      two:'Assainissement urbain, traitement de l’eau potable et épuration des eaux résiduaires'
    }
  },
  {
    path: '/etudes-impact-environnement',
    title: 'Études d’impact sur l’environnement',
    image: etude_impact_envirornement,
    body:{
      one:'Évaluations environnementales conformes aux lois et règlements en vigueur.',
     
    }
  },
    {
      path: '/securite-contre-incendie-constructions',
      title: 'Sécurité contre l’incendie dans les constructions',
      image: securité,
      body:{
        one:'Mesures de prévention et de sécurité pour protéger les bâtiments contre les incendies.',
       
      }
  }

  // Ajoutez plus de services ici
];
  
 
  
  return (

    <AppBar position="static" style={{paddingRight:0,paddingLeft:0}}> 
    <Toolbar style={{ justifyContent:'space-between',backgroundColor:'#252C3C',paddingRight:'4%',paddingLeft:'4%'}}>
      {isMd&&(<>
    
        <Link to="/"> <img src={new_logo_faminda} alt="Logo" style={{ height: 82 , objectFit:'cover'}}  /> </Link>
     
      <Stack direction='row'spacing={2} >
<Link to="/">  <Button style={{color:'white'}} >Home</Button></Link> 
 <Stack> 

  <Button style={{color:'white'}} endIcon={<ArrowDropDownIcon />} id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        
        >Services</Button>  
       
  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {services.map((service, index) => (
        <Link
          key={index}
          to={service.path}
          state={{ title: service.title, image: service.image,body:service.body }}
          style={{textDecoration:'none', color:'#212121'}}
        >
          <MenuItem onClick={handleClose}>{service.title}</MenuItem>
        </Link>
      ))} 
      {/*
      <Link to='/Service'   state={routeState}   >  <MenuItem onClick={handleClose} >Calcul de strcute pour batiments à tous usages</MenuItem></Link>
        <MenuItem onClick={handleClose}>Études architecturales et suivi des projets</MenuItem>
        <MenuItem onClick={handleClose}>Études générales</MenuItem>
        <MenuItem onClick={handleClose}>Hydrauliques urbaine</MenuItem>
        <MenuItem onClick={handleClose}>Routes, autoroutes et transports</MenuItem>
        <MenuItem onClick={handleClose}>Ouvrages d'art</MenuItem>
        <MenuItem onClick={handleClose}>Barrages</MenuItem>
        <MenuItem onClick={handleClose}>Travaux maritimes et fluviaux</MenuItem>
        <MenuItem onClick={handleClose}>Travaux du génie de défense à caractére spécifique</MenuItem>
      <Link> <MenuItem >Etudes générales</MenuItem></Link> 
        <MenuItem onClick={handleClose}>Etudes générales</MenuItem>
        <MenuItem onClick={handleClose}>Etudes générales</MenuItem>
      */}
      </Menu>
</Stack>
<Link to="/realisations">  <Button style={{color:'white'}}>Réalisations</Button> </Link>
<Link to="/about">  <Button style={{color:'white'}}>À propos</Button> </Link>
{/*
<Link to="/contact"> <Button style={{color:'white'}}  endIcon={<ArrowDropDownIcon />} id="basic-button"
        aria-controls={openLangue ? 'basic-Langue' : undefined}
        aria-haspopup="true"
        aria-expanded={openLangue ? 'true' : undefined}
        onClick={handleClickLangue}  >Francais</Button> </Link>
      */}
<Menu
        id="basic-Langue"
        anchorEl={anchorElLangue}
        open={openLangue}
        onClose={handleCloseLangue}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseLangue}>Anglais</MenuItem>
       
  
      </Menu>
<Link to="/contact">  <Button style={{color:'white'}}>Contactez-nous</Button></Link>

    </Stack>
    </>)}
    {
      isXs&&(
        <>
        
        <Stack  direction='row' >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => setOpenDrawer(true)} >
              <MenuIcon />
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
      <Link to='/'  style={{textDecoration:'none', color:'#212121'}} onClick={()=>setOpenDrawer(false)} >
      <ListItemButton >
         {/** 
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
       */}
        <ListItemText primary="Home" />
      </ListItemButton>
      </Link>
     
      <ListItemButton onClick={handleClickList}>
        {/*
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
    */}
        <ListItemText primary="Services" />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
       
          {
            services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                state={{ title: service.title, image: service.image,body:service.body }}
                style={{textDecoration:'none', color:'#212121'}}
                onClick={()=>setOpenDrawer(false)}
              >
             
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={service.title} />

                   </ListItemButton>
              </Link>
            ))
          }
        </List>
      </Collapse>
      <Link to='/realisations'  style={{textDecoration:'none', color:'#212121'}} onClick={()=>setOpenDrawer(false)}>
      <ListItemButton>
        {/*
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
    */}
        <ListItemText primary="Réalisations" />
      </ListItemButton>
      </Link>
      <Link to='/about' style={{textDecoration:'none', color:'#212121'}} onClick={()=>setOpenDrawer(false)} >
      <ListItemButton>
      
        {/*
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
    */}
        <ListItemText primary="À propos" />
      </ListItemButton>
      </Link>
      {/** 
      <ListItemButton onClick={handleClickList}>
      
      
        <ListItemText primary="Francais" />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      */}
      {/*
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          
            <ListItemText primary="Anglais" />
          </ListItemButton>
   
          
        </List>
      </Collapse>
       */}
      <Link to='/contact'  style={{textDecoration:'none', color:'#212121'}}  onClick={()=>setOpenDrawer(false)}>
      <ListItemButton>
         {/** 
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
       */}
        <ListItemText primary="Contactez-nous" />
      </ListItemButton>
      </Link>
    </List>
       
      </Drawer>

          

        </Stack> 
        <Link to='/'  onClick={()=>setOpenDrawer(false)} >
        <img src={logo} alt="Logo" style={{ height: 90 , objectFit:'cover'}}  />  </Link>



      
        </>
      )
    }
    </Toolbar>
  </AppBar>
  
  )
}
