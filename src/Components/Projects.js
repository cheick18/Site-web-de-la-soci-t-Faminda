import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ProjetItem from './ProjetItem'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import centre_culturel_berkane_3 from '../images/projets/centre_culturel_berkane_3.jpg'
import refection_remise_n_etat_equipements_1 from '../images/projets/refection_remise_n_etat_equipements_1.jpg'
import extention_academique_universite_alkhawayne_1 from '../images/projets/extention_academique_universite_alkhawayne_1.jpg'
import student_center_universite_alkhawayne_Ifrane_1 from '../images/projets/student_center_universite_alkhawayne_Ifrane_1.jpg'
export default function Projects() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
          partialVisibilityGutter :  40 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter :  40 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const carouselItemStyle = {
        padding: '0 10px', 
       
      };
      /**
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
       */

      const projects=[ {
        "id": 1,
        "title": "Construction du centre culturel de Berkane",
      
        "path": "/construction-centreculturel-berkane",
        "image": centre_culturel_berkane_3
      },
      {
        "id": 2,
        "title": "Réfection et la remise en état des équipements du lotissement existant par tranche",
      
        "path": "/refection-remise-en-etat-equipements-lotissement",
        "image": refection_remise_n_etat_equipements_1
      },
      {
        "id": 3,
        "title": "Construction de l’extension académique de l’université Al Khawayne d’Ifrane",
        "path": "/construction-extension-academique-universite-al-khawayne-ifrane",
      "image":extention_academique_universite_alkhawayne_1,
      },
      {
        "id": 4,
        "title": "Construction de student center de l’université Al Khawayne d’Ifrane",
       
        "path": "/construction-student-center-universite-al-khawayne-ifrane",
        "image": student_center_universite_alkhawayne_Ifrane_1
      }]
  return (
    <div style={{ padding:'0 4%'}}>    
         
            <div >
            
              <Carousel responsive={responsive} showDots={true}
               removeArrowOnDeviceType={["desktop","tablet", "mobile"]} 
               centerMode = { false}
                itemClass="carousel-item"
                autoPlay={true}
                >
                  {/*
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              */}
              {projects.map((project)=>{
                return(
                  <ProjetItem title={project.title} image={project.image} path={project.path} />
                )
              })}

              </ Carousel>
              </div>
           
      
      
    </div>
  )
}
