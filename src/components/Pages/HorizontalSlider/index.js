import { useEffect, useRef, useState } from 'react';

import GsapSliderMolecule from '../../Molecule/GsapSliderMolecule'
import Nav from '../../Molecule/Nav';



const HorizontalSlider = () => {
  return (
    <div className='HorizontalSlider'>
      <Nav />
      <GsapSliderMolecule/>
      <GsapSliderMolecule/>
      <GsapSliderMolecule/>
      <GsapSliderMolecule/>
    </div>
  );
}

export default HorizontalSlider;