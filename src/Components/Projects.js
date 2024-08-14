import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ProjetItem from './ProjetItem'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
  return (
    <div style={{ padding:'0 4%'}}>    
         
            <div >
            
              <Carousel responsive={responsive} showDots={true}
               removeArrowOnDeviceType={["desktop","tablet", "mobile"]} 
               centerMode = { false}
                itemClass="carousel-item"
                autoPlay={true}
                >
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />
              <ProjetItem />

              </ Carousel>
              </div>
           
      
      
    </div>
  )
}
