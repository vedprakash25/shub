import { useEffect, useRef, useState } from 'react';
import Nav from '../../Molecule/Nav';

import { gsap, ScrollTrigger } from 'gsap/all';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
gsap.registerPlugin(ScrollTrigger)

const useStyles = makeStyles((theme) => ({
  inBox: {
    overflow: 'hidden'

  },
  slideIt: {
    overflow: 'hidden',
    background: 'grey'
  },
  imageBox: {
    width: '100%',
    height: '50vh',
    border: '1px solid red',
  },
}))

const GsapSlider = () => {
  const [scrollPosition, setScrollPosition] = useState('0')

  const classes = useStyles()

  const slideRef = useRef()

  const borderChange = (refs, scrollPosition) => {
    gsap.timeline(
      {
        scrollTrigger: {
          trigger: refs.current,
          toggleActions: "restart pause reverse pause",
          start: "+=-300", // when the top of the trigger hits the top of the viewport
          end: "+=600", // end after scrolling 500px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: true,
          pinSpacing: false,
          onLeaveBack: () => {
            gsap.to(refs.current, {
              border: '10px solid white',
              background: 'green'
            })
          },
          onEnter: () => {
            gsap.to(refs.current, {
              border: '100px solid red',
              background: 'green',
              x: scrollPosition
            })
          },
          onLeave: () => {
            gsap.to(refs.current, {
              border: '100px solid green',
              background: 'red'
            })
          },

        },
      })
  }

  const position = window.scrollY;

  const handleScroll = () => {
    setScrollPosition(position);
    console.log(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    borderChange(slideRef, scrollPosition)
  }, [])

  return (
    <div className={classes.mainBox}>
      <Nav />

      <Box className={classes.inBox} >
        <Box className={classes.slideIt} >
          <Box className={classes.imageBox} ></Box>
        </Box>
        <Box className={classes.slideIt} >
          <Box className={classes.imageBox} ></Box>
        </Box>
        <Box className={classes.slideIt} ref={slideRef} >
          <Box className={classes.imageBox} >s</Box>
        </Box>
        <Box className={classes.slideIt} >
          <Box className={classes.imageBox} ></Box>
        </Box>
        <Box className={classes.slideIt} >
          <Box className={classes.imageBox} ></Box>
        </Box>
        <Box className={classes.slideIt} >
          <Box className={classes.imageBox} ></Box>
        </Box>
      </Box>
      <Box className={classes.inBox} >
        ssssssssssssssss
      </Box>


      

    </div >
  );
}

export default GsapSlider