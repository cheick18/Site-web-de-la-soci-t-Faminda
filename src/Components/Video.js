import { Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import { Player } from 'video-react';
export default function Video() {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only('xs'));
  const isSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <div style={{ textAlign: 'center' }}>
        <link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
<Typography variant='h3' sx={{textAlign:'center',paddingBlockStart: isXs?'100px':'48px'}}>Title of video</Typography>
          <Player   >
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
      
    </div>
  )
}
