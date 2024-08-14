import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import travaux_1 from '../images/travaux_1.jpg'

export default function ProjetItem() {
  return (
    <div>
      
      <Card sx={{ Width: 'auto',padding:'40px' }} >
      <CardMedia
        sx={{ height: 140 }}
        image={travaux_1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
    
        <Button size="small" color='secondary'>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}
