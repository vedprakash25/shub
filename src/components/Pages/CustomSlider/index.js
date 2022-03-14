import { listSubheaderClasses } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../Molecule/Nav';
import "./customslider.css"
import { BsArrowRightSquare, BsArrowLeftSquare } from 'react-icons/bs'

const sliderData = [

    {
        image: "https://images.unsplash.com/photo-1647168585205-e56ebb24a669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "",
        alt: "slide2"
    },
    {
        image: "https://images.unsplash.com/photo-1647163927846-4dd23cdede50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "",
        alt: "slide3"
    },
    {
        image: "https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "",
        alt: "slide4"
    },
    {
        image: "https://images.unsplash.com/photo-1647164926229-06e243673aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "",
        alt: "slide5"
    },

]

const CustomSlider = () => {

    const [current, setCurrent] = useState(0)
    const length = sliderData.length


    let imgRef= useRef(current)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(sliderData) || length <= 0) {
        return (null)
    }

    console.log(current)

    // useEffect(() => {

    // }, [])


    return (
        <div className='slidercustom'>
            <Nav />
            <h1>slidercustom</h1>

            <Box className="slider" >
                <BsArrowLeftSquare onClick={prevSlide} className="leftArrow posAbsolute" />
                <BsArrowRightSquare onClick={nextSlide} className="rightArrow posAbsolute" />

                {
                    sliderData.map((item, index) => {
                        return (
                            <div className={index === current ? "slide activeSlide" : "slide"} 
                            onScroll={()=>setCurrent(index)}
                            key={index}
                            >
                                {index === current && <img src={item.image} alt={item.alt} ref={imgRef}/>}
                            </div>
                        )
                    })
                }

                <ul className="pagination_box">
                    {
                        sliderData.map((item, index) => {
                            return (
                                <li key={index} 
                                className={index === current ? "pagination active" : "pagination "}
                                onClick={()=>setCurrent(index)}
                                ></li>
                            )
                        })
                    }

                </ul>

            </Box>

            <Box></Box>

        </div>

    );
}


export default CustomSlider;

