
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  nav: {
    // width:"20%",
    display: "inline-flex",
    flexDirection: "column",
    position: 'fixed',
    top:"0",
    right: "0",
    zIndex: "9999",
    background: "black",
    color: "white",
    "& a": {
      "&:hover": {
        color: "grey"
      }
    }
  }
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <div className={classes.nav}>
      <a style={{ margin: '0 10px' }} href='/'>Draw here</a>
      <a style={{ margin: '0 10px' }} href='/mag'>Magic Scroll</a>
      <a style={{ margin: '0 10px' }} href='/api'>API</a>
      <a style={{ margin: '0 10px' }} href='/arr'>Methods</a>
      <a style={{ margin: '0 10px' }} href='/slider'>Slider</a>
      <a style={{ margin: '0 10px' }} href='/gsap'>Gsap</a>
      <a style={{ margin: '0 10px' }} href='/scrollani'>ScrollAnimation</a>
      <a style={{ margin: '0 10px' }} href='/slidercustom'>slidercustom</a>
      <a style={{ margin: '0 10px' }} href='/horizontalPage'>HorizontalPage</a>
      <a style={{ margin: '0 10px' }} href='/grid'>Grid Layout</a>
      <a style={{ margin: '0 10px' }} href='/curanimation'>Cursor Animation</a>
      <a style={{ margin: '0 10px' }} href='/threejs'>Threejs</a>
      {/* <a style={{ margin: '0 10px' }} href='/threeview'>ThreeDview</a> */}
    </div>
  );
}

export default Nav;

