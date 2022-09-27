import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Keyboard,
  EffectFade,
  Parallax,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/parallax";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/autoplay";

import brebel from "../../assets/brebel.png";
import { useState } from "react";

export default function Swiperjs() {
  const [image, setImage] = useState(brebel);
  const data = [
    {
      title: "title one",
      src:brebel,
      para: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    },
    {
      title: "title two",
      src:brebel,
      para: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    },
    {
      title: "title three",
      src:brebel,
      para: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    },
    {
      title: "title four",
      src:brebel,
      para: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    },
    {
      title: "title five",
      src:brebel,
      para: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    },
    {
      title: "title six",
      src:brebel,
      para: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
    },
  ];

  const modules = [
    Navigation,
    Pagination,
    Keyboard,
    Mousewheel,
    Parallax,
    EffectFade,
  ];

  const handleSlide = () => {};

  return (
    <div className="main__wrapper">
      <div className="left__wrapper half__wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => handleSlide()}
          onSwiper={(swiper) => console.log(swiper)}
          modules={modules}
          keyboard
          parallax
          loop
          mousewheel
          watchSlidesProgress
          effect={EffectFade}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide className="swiper_slide">
                <h1>{item.title}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="right__wrapper half__wrapper">
        <div>
          <img src={brebel} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
