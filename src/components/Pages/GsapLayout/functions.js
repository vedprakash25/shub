import gsap, { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export const rotate = ({ selector }) => {
    gsap.to(`#${selector}`, { duration: 2, opacity: 0 })
}