import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cih from '../Components/cih.jpg'
import bora from '../Components/bora.png'
import banque_populaire from '../Components/banque_populaire.png'
import alakhawayn from '../Components/alakhawayn.png'
import estem from '../Components/estem.png'
import { Typography } from '@mui/material';


export default function Partenaire() {
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
    <div style={{padding:'0 10%'}}>
             <Carousel responsive={responsive} showDots={false}
               removeArrowOnDeviceType={["desktop","tablet", "mobile"]} 
               centerMode = { false}
                itemClass="carousel-item"
                autoPlay={true}
                >
              

<div style={{position:'relative',width:'auto', height:'300px'}}>
 <div style={{padding:' 10px', paddingTop:'70px'}}>
 <img src={estem}   style={{width:'100%', height:'70px', objectFit:'contain'}}  />
    </div>
</div>
 <div style={{position:'relative',width:'auto', height:'300px'}}>
 <div style={{padding:'10px'}}>
 <img src={cih}   style={{width:'100%', height:'200px'}}  />
    </div>
 </div>
 <div style={{position:'relative',width:'auto', height:'100px'}}>
 <div style={{padding:'60px 10px',paddingTop:'80px'}}>
 <img src={bora}   style={{width:'100%', height:'50px',objectFit:'contain'}}  />
    </div>
 </div>
 <div style={{position:'relative',width:'auto', height:'300px'}}>
 <div style={{padding:'10px'}}>
 <img src={banque_populaire}   style={{width:'100%', height:'200px',}}  />
    </div>
 </div>
 <div style={{position:'relative',width:'auto', height:'300px'}}>
 <div style={{padding:' 10px', paddingTop:'70px'}}>
 <img src={estem}   style={{width:'100%', height:'70px', objectFit:'contain'}}  />
    </div>
 </div>
 <div style={{position:'relative',width:'auto', height:'300px'}}>
 <div style={{padding:' 10px', paddingTop:'70px'}}>
 <img src={alakhawayn}   style={{width:'100%', height:'70px', objectFit:'contain'}}  />
    </div>
 </div>
 </Carousel>

 {/*
         
            <img src={banque_populaire}   style={{width:'auto', height:'100px', objectFit:'cover'}}  />
            <img src={cih}  style={{width:'130px', height:'auto', objectFit:'cover'}}  />
            <img src={alakhawayn}  style={{width:'130px', height:'100px', objectFit:'cover'}}  />
            <img src={bora} style={{width:'auto', height:'100px', objectFit:'cover'}} />
       */}
        

          
      
    </div>
  )
}
