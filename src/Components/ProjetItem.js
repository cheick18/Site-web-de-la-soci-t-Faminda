import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import travaux_1 from '../images/travaux_1.jpg'

export default function ProjetItem({title, image, description}) {
  return (
  
      <div style={{position:'relative',width:'auto', height:'300px'}}>
      <div style={{padding:'0 10px',}}>
      <Card sx={{ Width: 'auto',padding:'40px' ,border:'none'}} >
      <CardMedia
        sx={{ height: 160 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:'bold'}}>
      {title}
        </Typography>
        {/** 
        <Typography variant="body2" color="text.secondary">
       {description}
        </Typography>
        */}
      </CardContent>
      {/*
      <CardActions>
    
        <Button size="small" color='secondary'>Learn More</Button>
      </CardActions>
      */}
    </Card>
    </div>
    </div>
  )
}
