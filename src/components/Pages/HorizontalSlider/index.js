import { useEffect, useRef, useState } from 'react';
import Nav from '../../Molecule/Nav';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  splideBox: {
    height: '50vh',
    width: '50%',
    border: '1px solid red'
  },
  splides: {
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  splideImages: {
    width: '30%',
    display: 'inline-flex',
    margin: '10px',
  },
  horBox: {

  }
}))

const HorizontalSlider = () => {
  const classes = useStyles()

  const h = window.innerHeight
  const w = window.innerWidth
  return (
    <div className='HorizontalSlider'>
      <Nav />

      <Box className={classes.splideBox}>
        <Splide
          options={{
            rewind: false,
            wheel: true,
            pagination: true,
            arrows: false,
            autoplay: true,
            autoScroll: {
              speed: 10,
              pauseOnHover: true
            },
          }}>
          <SplideSlide className={classes.splides}>
            <img src={`https://picsum.photos/${w}/${h}`} className={classes.image} />
          </SplideSlide>

          <SplideSlide className={classes.splides}>
            <img src={`https://picsum.photos/${w - 1}/${h}`} className={classes.image} />
          </SplideSlide>


          <SplideSlide className={classes.splides}>
            <Box className={classes.splideImages}>
              <img src={`https://picsum.photos/500`} className={classes.image} />
            </Box>
          </SplideSlide>
        </Splide>
      </Box>


      <Box className={classes.splideBox}>
        <Box className={classes.horBox} >
            
        </Box>
      </Box>


    </div>
  );
}

export default HorizontalSlider