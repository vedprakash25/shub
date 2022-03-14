
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    splideBox: {
      height: '50vh',
      width: '50%',
      border: '1px solid red'
    },
    splides: {
      width:"100%",
      height:"100%"
    },
    image: {
      width: '100%',
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
 const GsapSliderMolecule = () => {

    const classes = useStyles()
    const h = window.innerHeight
    const w = window.innerWidth

    return (
        <>
            <Box className={classes.splideBox}>
                <Splide
                    options={{
                        rewind: false,
                        wheel: true,
                        pagination: true,
                        arrows: false,
                        autoplay: false,
                        // autoScroll: {
                        //     speed: 10,
                        //     pauseOnHover: true
                        // },
                        releaseWheel: true
                    }}>
                    <SplideSlide className={classes.splides}>
                        <img src={`https://picsum.photos/${w}/${h}`} className={classes.image} />
                    </SplideSlide>

                    <SplideSlide className={classes.splides}>
                        <img src={`https://picsum.photos/${w}/${h}`} className={classes.image} />
                    </SplideSlide>

                    <SplideSlide className={classes.splides}>
                        <img src={`https://picsum.photos/${w}/${h}`} className={classes.image} />
                    </SplideSlide>

                    <SplideSlide className={classes.splides}>
                        <img src={`https://picsum.photos/${w}/${h}`} className={classes.image} />
                    </SplideSlide>
                </Splide>
            </Box>

        </>
    );
}


export default GsapSliderMolecule;

