import { useEffect, useRef, useState, createContext } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Nav from '../../Molecule/Nav';
import AnimationContextProvider from '../../Molecule/AnimationContextProvider';
import { gsap, ScrollTrigger } from 'gsap/all';
import "./style.css"

gsap.registerPlugin(ScrollTrigger)

const useStyles = makeStyles((theme) => ({
  scrollAnimation: {
    border: '1px solid red',
    height: '100vh',
    transition: 'all 2s ease',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      fontSize: "5rem",
    }
  }
}))

const ScrollAnimation = () => {
  const classes = useStyles()

  const [currBG, setCurrBg] = useState("#fff")
  let appRef = useRef(null)
  let secondRef = useRef(null)
  let thirdRef = useRef(null)
  let textRef = useRef(null)

  let box = useRef()
  let text1 = useRef()
  let text2 = useRef()
  let text3 = useRef()
  let logo = useRef()


  useEffect(() => {
    const innerHeight = window.innerHeight;

    // gsap.timeline(
    //   {
    //     scrollTrigger: {
    //       trigger: secondRef.current,
    //       toggleActions: "restart pause reverse pause",
    //       start: "+=-300",
    //       end: "+=600",
    //       markers: true,
    //       onEnter: () => {
    //         gsap.to(secondRef, { background: 'grey'})
    //         gsap.to(textRef, {color: "white", fontSize: "10rem"})
    //       },

    //       onLeave: () => { 
    //         gsap.to(secondRef.current, { background: 'white'})
    //       }

    //     },
    //   })

    gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "+=100",
        end: "+=600",
        markers: true,
        scrub: true,
        pin: true
      }
    })
      .to(text1.current, { y: innerHeight * 1 })
      .to(text2.current, { y: innerHeight * 1 })
      .to(text3.current, { y: innerHeight * 1 })
      .to(logo.current, { y: innerHeight * 1, rotate: 360 });

  }, [currBG])


  return (
    <div >
      <Nav />

      <AnimationContextProvider.Provider value={{ setCurrBg }}>
        <div ref={appRef} className={classes.scrollAnimation}>
          <h1 ref={textRef}>first Section</h1>
        </div>
        <div ref={secondRef} className={classes.scrollAnimation}>
          <h1 ref={textRef}>second Section</h1>
        </div>
        <div ref={thirdRef} className={classes.scrollAnimation}>
          <h1 ref={textRef}>third Section</h1>
        </div>

      </AnimationContextProvider.Provider>



      <div ref={box} className="box">
        <h2 ref={text1} className="text1">Scroll Trigger is awesome</h2>
        <h2 ref={text2} className="text2">this is the first code</h2>
        <h2 ref={text3} className="text3">How it is ?</h2>
        <img
          ref={logo}
          className="logo"
          src="https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80"
          alt="logo"
        />
      </div>



    </div>
  );
}

export default ScrollAnimation