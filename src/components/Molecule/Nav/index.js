
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    top: "0%",
    right: "0%",
    display: "flex",
    width: "15%",
    flexDirection: "column",
    zIndex: "9999",
    background: "black",
    color: "white",
    "& a": {
      "&:hover": {
        color: "grey"
      }
    }
  },
  showMenu: {
    transition: "all .5s ease",
    opacity: 1,
    transform: "translateX(-0px)"
  },
  hideMenu: {
    transition: "all .5s ease",
    opacity: 0,
    transform: "translateX(200px)"
  }

}))

const Nav = ({ }) => {
  const classes = useStyles();

  const [flag, setFlag] = useState(true)

  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;
    window.addEventListener("scroll", () => {
      newValue = window.pageYOffset;

      if (newValue < oldValue) {
        oldValue = newValue;
        setFlag(true)       
      }
      if (newValue > oldValue) {
        oldValue = newValue;
        setFlag(false)       
      }
    });

  }, [])

  return (
    <div className={clsx(classes.nav, flag ? classes.showMenu : classes.hideMenu)}>
      <a style={{ margin: '0 10px' }} href='/'>Draw here</a>
      <a style={{ margin: '0 10px' }} href='/mag'>Magic Scroll</a>
      <a style={{ margin: '0 10px' }} href='/api'>API</a>
      <a style={{ margin: '0 10px' }} href='/arr'>Methods</a>
      <a style={{ margin: '0 10px' }} href='/slider'>Slider</a>
      <a style={{ margin: '0 10px' }} href='/gsap'>Gsap</a>
      <a style={{ margin: '0 10px' }} href='/gsapl'>Gsap Layout</a>
      <a style={{ margin: '0 10px' }} href='/scrollani'>ScrollAnimation</a>
      <a style={{ margin: '0 10px' }} href='/slidercustom'>slidercustom</a>
      <a style={{ margin: '0 10px' }} href='/horizontalPage'>HorizontalPage</a>
      <a style={{ margin: '0 10px' }} href='/grid'>Grid Layout</a>
      <a style={{ margin: '0 10px' }} href='/curanimation'>Cursor Animation</a>
      <a style={{ margin: '0 10px' }} href='/threejs'>Threejs</a>
      <a style={{ margin: '0 10px' }} href='/tail'>Tail</a>
    </div>
  );
}

export default Nav;

