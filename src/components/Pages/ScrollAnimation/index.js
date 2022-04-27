import { useEffect, useRef, useState, createContext } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Nav from '../../Molecule/Nav';
import AnimationContextProvider from '../../Molecule/AnimationContextProvider';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const useStyles = makeStyles((theme) => ({
  scrollAnimation: {
    border: '1px solid red',
    height: '100vh',
  }
}))

const ScrollAnimation = () => {
  const classes = useStyles()

  const [currBG, setCurrBg] = useState("#fff")
  let appRef = useRef(null)
  let secondRef = useRef(null)
  let thirdRef = useRef(null)
  let textRef = useRef(null)


  useEffect(() => {

    // gsap.to(appRef.current, {
    //   duration: 2,
    //   background: currBG,
    // })


    gsap.timeline(
      {
        scrollTrigger: {
          trigger: secondRef.current,
          toggleActions: "restart pause reverse pause",
          start: "+=-300", // when the top of the trigger hits the top of the viewport
          end: "+=600", // end after scrolling 500px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: true,
          pinSpacing: false,
          onLeaveBack: () => {
            gsap.to(secondRef.current, {
              background: currBG
            })
          },
          onEnter: () => {
            gsap.to(secondRef.current, {
              background: 'grey',
            })
          },
          onLeave: () => {
            gsap.to(secondRef.current, {
              background: 'yellow'
            })
          },

        },
      })

  }, [currBG])


  return (
    <div >
      <Nav />

      <AnimationContextProvider.Provider value={{ setCurrBg }}>
        <div ref={appRef} className={classes.scrollAnimation}>
          AAAAAA
        </div>
        <div ref={secondRef} className={classes.scrollAnimation}>
          <h1 ref={textRef}>I am secondref</h1>
        </div>
        <div ref={thirdRef} className={classes.scrollAnimation}>
          AAAAAA
        </div>
      </AnimationContextProvider.Provider>

    </div>
  );
}

export default ScrollAnimation