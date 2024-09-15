import React from 'react'
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Grid, Skeleton, Typography,useMediaQuery } from '@mui/material';
import Footer from '../Components/Footer';
import _dbproject from '../Components/_dbproject'

import centre_culturel_berkane_3 from '../images/projets/centre_culturel_berkane_3.jpg'
import refection_remise_n_etat_equipements_1 from '../images/projets/refection_remise_n_etat_equipements_1.jpg'
import extention_academique_universite_alkhawayne_1 from '../images/projets/extention_academique_universite_alkhawayne_1.jpg'

import student_center_universite_alkhawayne_Ifrane_1 from '../images/projets/student_center_universite_alkhawayne_Ifrane_1.jpg'

import immeuble_appartement_R2_Kinshasa_1 from '../images/projets/immeuble_appartement_R2_Kinshasa_1.png'
import villa_unifamiliale_Kinshasa_1 from '../images/projets/villa_unifamiliale_Kinshasa_1.png'
import route_ketama_3 from '../images/projets/route_ketama_3.jpg'
import immeuble_appartement_R3_Kinshasa_1 from '../images/projets/immeuble_appartement_R3_Kinshasa_1.jpg'
import { useEffect } from 'react';
export default function Realisations() {
  const construction ='Construction d’une villa unifamiliale à Kinshasas'
  const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#212121',
    '&:hover': {
      textDecoration: 'underline',
    },
  }));
  

  const onmouseenter=(evenet)=>{
    evenet.target.style.opacity=0.6;


  }
  const onmouseleave=(evenet)=>{
    evenet.target.style.opacity=1;

  }
  const onmouseen=(evenet)=>{
    
  
  
    }
    const onmousel=(evenet)=>{
   
  
    }
    const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
 
  const isTav = useMediaQuery((theme) => theme.breakpoints.only('sm'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const productData=[
    {
      "id": 1,
      "name": "Construction du centre culturel de Berkane",
    
      "description": "Un smartphone puissant avec de nombreuses fonctionnalités.",
      "image": centre_culturel_berkane_3,
      "path":"/construction-centreculturel-berkane"
    },
    {
      "id": 2,
      "name": "Réfection et la rémise en etat des équipements du lotisseement existant par tranche",
    
      "description": "Un smartphone puissant avec de nombreuses fonctionnalités.",
      "image": refection_remise_n_etat_equipements_1,
        "path":"/refection-remise-en-etat-equipements-lotissement"
    },
    {
      "id": 3,
      "name": "Construction de l’extension académique de l’université Al Khawayne d’Ifrane",
      "description": "Un casque audio confortable avec un son de haute qualité.",
    "image":extention_academique_universite_alkhawayne_1,
     "path":"/construction-extension-academique-universite-al-khawayne-ifrane"
    },
    {
      "id": 4,
      "name": "Construction de student center de l’université Al Khawayne d’Ifrane",
     
      "description": "Aménagement plateau bureau Sidi Maarouf",
      "image": student_center_universite_alkhawayne_Ifrane_1,
       "path":"/construction-student-center-universite-al-khawayne-ifrane"
    },   {
      "id": 5,
      "name": "Construction d’un immeuble appartement R+2 à Kinshasa",
     
     
      "description": "Une tablette légère et facile à utiliser.",
      "image": immeuble_appartement_R2_Kinshasa_1,
       "path":"/construction-immeuble-appartements-r2-kinshasa"
    },
    {
      "id": 6,
      "name": "Construction d’une villa unifamiliale à Kinshasa",
    
      "description": "Une tablette légère et facile à utiliser.",
      "image": villa_unifamiliale_Kinshasa_1,
       "path":"/construction-villa-unifamiliale-kinshasa"
    },
    // Ajoutez d'autres produits selon vos besoins
    {
      "id": 7,
      "name": "Construction d’un immeuble appartement R+3 à Kinshasa",
    
      "description": "Une tablette légère et facile à utiliser.",
      "image": immeuble_appartement_R3_Kinshasa_1,
       "path":"/construction-immeuble-appartements-r3-kinshasa"
    },
    {
      "id": 8,
      "name": "Construction de la Route Ketama du PK0+000 au PK3+777  dans la commune Ouad El Mkhazine",
    
      "description": "Une tablette légère et facile à utiliser.",
      "image": route_ketama_3,
       "path":"/construction-route-retama"
    },
    {
      "id": 9,
      "name": "Construction d’une villa unifamiliale à Kinshasas",
    
      "description": "Une tablette légère et facile à utiliser.",
      "image": villa_unifamiliale_Kinshasa_1,
       "path":"/construction-villa-unifamiliale-kinshasa"
    },
  ]
  useEffect(() => {
    // Réinitialiser la position de défilement à 0
    window.scrollTo(0, 0);

  
    return () => {
     
    };
  }, []);
  return (
    <div>
   
      <>
    <Grid container sx={{p:'7% 5%'}} justifyContent='space-around' spacing={2}>
      <Grid item md={12} xs={12}>
      <Typography variant='h4'  sx={{fontFamily: 'Montserrat, sans-serif',paddingBlockEnd:8}}>Découvrez l'Ensemble de Nos Réalisations</Typography>
      </Grid>

      <>
      
      {
        isSm&&(
        
        productData.map((p)=>{
          
          return(
            <Grid item md={4} xs={12} style={{ paddingLeft:'16px',paddingRight:'16px' ,opacity:p.name!=construction?1:0}} key={p.id} >
  {p.name!=construction?<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <Link to={p.path}>
      <img src={p.image} style={{width:'100%', height:'200px',objectFit:'cover',borderRadius:'16px'}}  />
      </Link>
      </div>: <></>}
      
      
 {p.name!=construction? <Typography variant='h7' gutterBottom component="div" sx={{paddingBlockStart:'8px',fontWeight:'bold' }}><Link to='/detail' style={{textDecoration:'none',color:'#212121'}}>{p.name ?p.name:<Skeleton  width={160} sx={{margin:'0 auto'}}/>}</Link></Typography>:<></>}   
  {/* <Typography variant='h7' gutterBottom component="div" sx={{paddingBlockStart:'8px',fontWeight:'bold' }}><Link to='/detail' style={{textDecoration:'none',color:'#212121'}}>{p.name ?p.name:<Skeleton  width={160} sx={{margin:'0 auto'}}/>}</Link></Typography>
      */}
      
</Grid>

          );
        }
        )
        )
       }
         {
        isXs&&(
        
        productData.map((p)=>{
          return(
            <Grid item  xs={12}  key={p.id}  textAlign='center' style={{opacity:p.name!=construction?1:0}}>
  {p.image?<div style={{backgroundColor:'black',height:'200px',borderRadius:'16px'}}  onMouseEnter={onmouseenter} onMouseLeave={onmouseleave}>
        <Link to={p.path}>
      <img src={p.image} style={{width:'100%', height:'200px',objectFit:'cover',borderRadius:'16px'}}  />
      </Link>
      </div>: <Skeleton variant='rectangular' sx={{width:'100%',height:'200px',borderRadius:'16px'}} />}
      
      
      <Typography variant='h6' style={{paddingBlockStart:'8px'}}><Link to='/detail' style={{textDecoration:'none',color:'#212121'}}>{p.name ?p.name:<Skeleton  width={160} sx={{margin:'0 auto'}}/>}</Link></Typography>
      
      
</Grid>

          );
        }
        )
        )
       }
       </>
      {/*
       

    */}



    </Grid>
  
   <Footer />
    </>
    </div>
  )
}
