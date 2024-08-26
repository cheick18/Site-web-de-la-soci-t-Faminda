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

      const projects=[ {
        "id": 1,
        "title": "Construction du centre culturel de Berkane",
      
        "description": "Un smartphone puissant avec de nombreuses fonctionnalités.",
        "image": centre_culturel_berkane_3
      },
      {
        "id": 2,
        "title": "Réfection et la remise en état des équipements du lotissement existant par tranche",
      
        "description": "Un smartphone puissant avec de nombreuses fonctionnalités.",
        "image": refection_remise_n_etat_equipements_1
      },
      {
        "id": 3,
        "title": "Construction de l’extension académique de l’université Al Khawayne d’Ifrane",
        "description": "Un casque audio confortable avec un son de haute qualité.",
      "image":extention_academique_universite_alkhawayne_1,
      },
      {
        "id": 4,
        "title": "Construction de student center de l’université Al Khawayne d’Ifrane",
        "brand": "TabCorp",
        "price": 349.99,
    
        "description": "Une tablette légère et facile à utiliser.",
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
                  <ProjetItem title={project.title} image={project.image} description={project.description} />
                )
              })}

              </ Carousel>
              </div>
           
      
      
    </div>
  )
}
