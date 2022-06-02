import React, { useEffect } from 'react'
import './style.css'
// import { rotate } from './functions'
import gsap, { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)



export default function GsapLayout({ firstWrapper }) {

  const rotate = (selector) => {
    gsap.to(`.${selector}`,
      { duration: 5, opacity: 1 }
    )
  }

  useEffect(() => {

    rotate("firstWrapper")
  }, [])

  return (
    <div className='wrappers'>
      <h1>GsapLayoutWithAnimation</h1>
      <div className='firstWrapper wrapper'>
        <h1>firstWrapper</h1>
      </div>
      <div className='secondWrapper wrapper'></div>
      <div className='thirdWrapper wrapper'></div>
      <div className='fourthWrapper wrapper'></div>
      <div className='fifthWrapper wrapper'></div>
    </div>
  )
}