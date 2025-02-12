"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

export default function LogosSlider({ clientLogos }) {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

    if(!showSlider) return null
  return (
    <Swiper
    // {...setting}
    modules={[Navigation, Pagination, Autoplay]}
    // loop={true}
    spaceBetween={30}
    slidesPerView={2}
    loop={true}
    autoplay={{
        delay: 3000, // Time between each slide (in milliseconds)
        disableOnInteraction: false, // Set to false if you want the auto slider to continue even when the user interacts with the slider (e.g., clicking on a slide).
    }}
    breakpoints={{
        // when window width is >= 576px
        450: {
        slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
        slidesPerView: 4,
        },
        1200: {
        // when window width is >= 992px
        slidesPerView: 5,
        },
    }}
    >
    {clientLogos.map((elm, i) => (
        <SwiperSlide key={i}>
        <div className="swiper-slide">
            <Image
            height={62}
            width={100}
            style={{ 
                height: '62px',
                width: 'auto',
                objectFit: 'contain'
            }}
            className="bostami-client-slider-logo"
            src={`${process.env.MEXAR_URL}${elm}`}
            alt="client"
            />
        </div>
        </SwiperSlide>
    ))}
    </Swiper>
  )
}