"use client";

import { items } from "@/data/jobFeatures";
import React, { useEffect, useState } from "react";
import { clientLogos } from "@/data/clientLogos";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { bioData } from "@/data/bioData";
import { contactData } from "@/data/contactData";
import Image from "next/image";
import { profileInfo } from "@/data/profileInfo";
import Email from "./Email";
export default function About() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <div className="bostami-page-wrap pt-60 pl-80 pr-80">
      <div className="page-tilte-2-wrap">
        <div className="row">
          <div className="col-12">
            <div className="bostami-page-title-wrap mb-40">
              <h2 className="page-title">À Propos de moi</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-2-wrap">
        <div className="row">
          <div className="col-lg-4 col-md-8">
            <div className="bostami-parsonal-info-img">
              <Image
                width={240}
                height={240}
                src={profileInfo.imageSrcThree}
                alt="profile"
              />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="bostami-parsonal-info-wrap mb-40">
              <h4 className="bostami-parsonal-info-title">Qui Suis-Je?</h4>
              <p className="bostami-parsonal-info-bio-text">{bioData.descOne}</p>

              <p className="bostami-parsonal-info-bio-text">{bioData.desc}</p>

              <div className="bostami-parsonal-info-contact">
                <h3 className="title">Info Perso</h3>
                <div className="row">
                  {contactData.map((elm, i) => (
                    <div key={i} className="col-lg-6 col-md-6">
                      <div className="bostami-parsonal-info-contact-item">
                        <div
                          style={{
                            color: `${elm.color}`,
                            fontSize: `${elm.fontSize}`,
                          }}
                          className="icon"
                        >
                          <i className={elm.iconClass}></i>
                        </div>
                        <div className="text">
                          <span>{elm.text.label}</span>
                          {elm.hidden ?
                            <Email user={elm.text.user} domain={elm.text.domain} />
                            :
                            <p>{elm.text.value}</p>
                            }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="what-i-do-2 mb-50">
        <div className="row">
          <div className="col-12">
            <div className="bostami-section-title-wrap mb-30">
              <h2 className="section-title">Ce que je fais!</h2>
            </div>
          </div>

          {items.map((elm, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6">
              <div className={`bostami-what-do-item ${elm.bg}`}>
                <div className="text">
                  <h4 className="title" style={{display: "flex", alignItems: "center"}}>
                    <div className="icon" style={{ marginRight: 15 }}>
                      <i style={{ fontSize: 45, fontWeight: "bold" }} className={elm.icon}></i>
                    </div>
                    <div>{elm.title} </div>
                    
                  </h4>

                  <p style={{ textAlign: "justify"}}>{elm.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="client-2-wrap bg-light-white-2 pt-40 pb-65">
        <div className="row">
          <div className="col-12">
            <div className="bostami-section-title-wrap text-center mb-35">
              <h2 className="section-title">Clients</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="bostami-client-slider">
              <div className="swiper-container client_slide_active">
                {showSlider && (
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
                            width={400}
                            style={{ height:'62px' }}
                            className="bostami-client-slider-logo"
                            src={elm.imgSrc}
                            alt="client"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center pt-25 pb-25">
        <span>© {new Date().getFullYear()} Tous droits réservés par Francois Aubeut.</span>
      </div>
    </div>
  );
}
