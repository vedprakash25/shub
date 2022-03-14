import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

import GsapSliderMolecule from '../../Molecule/GsapSliderMolecule'
import Nav from '../../Molecule/Nav';
import SampleBoxes from '../../Molecule/SampleBoxes';

const useStyles = makeStyles((theme) => ({
  outerWrapper: {
    height: '100vw',
    width: "100vh",
    display: "flex",
    transform: 'rotate(-90deg) translateX(-100vh)',
    transformOrigin: "top left",
    overflowX: 'hidden',
    overflowY: "scroll",
    position: "absolute",

  },
  wrapper: {
    transform: 'rotate(90deg) translateY(-100vh)',
    transformOrigin: "top left",
    width: "400vw",
    display: "flex",
    flexDirection: "row",
    "& h1": {
      fontSize: "5rem"
    }
  },

}))

//refrenced
// ################ https://www.youtube.com/watch?v=OeaHnxahf40 ###############3

const HorizontalPage = () => {
  const classes = useStyles()

  return (
    <div >
      <Nav />
      <SampleBoxes bgColor={"pink"} >
        <h1>Section  1</h1>
      </SampleBoxes>
      <Box className={classes.outerWrapper}>
        <Box className={classes.wrapper}>
          <SampleBoxes bgColor={"pink"} >
            <h1>Section  1</h1>
          </SampleBoxes>
          <SampleBoxes bgColor={"grey"} >
            <h1>Section  2</h1>
          </SampleBoxes>
          <SampleBoxes bgColor={"violet"} >
            <h1>Section  3</h1>
          </SampleBoxes>
          <SampleBoxes bgColor={"green"} >
            <h1>Section  4</h1>
          </SampleBoxes>
        </Box>
      </Box>
    </div>
  );
}

export default HorizontalPage