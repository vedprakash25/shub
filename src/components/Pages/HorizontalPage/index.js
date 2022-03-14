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
    transformOrigin:"top left",
    overflowX:'hidden',
    overflowY:"scroll",
    position:"absolute",

  },
  wrapper: {
    transform: 'rotate(90deg) translateY(-100vh)',
    transformOrigin:"top left",
    width:"400vw",
    display:"flex",
    flexDirection:"row",
    
  }
}))

const HorizontalPage = () => {
  const classes = useStyles()

  return (
    <div >
      <Nav />
      <Box className={classes.outerWrapper}>
        <Box className={classes.wrapper}>
          <SampleBoxes bgColor={"pink"} />
          <SampleBoxes bgColor={"grey"} />
          <SampleBoxes bgColor={"violet"} />
          <SampleBoxes bgColor={"green"} />
        </Box>
      </Box>
    </div>
  );
}

export default HorizontalPage