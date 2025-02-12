import React from "react";
import { contactData } from "@/data/contactData";
import Image from "next/image";
import Email from "./Email";
import LogosSlider from "./LogosSlider";

export default function About({ data = {} }) {
  const { about, services, clientLogos } = data

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
                src={`${process.env.MEXAR_URL}${about.image}`}
                alt="profile"
              />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="bostami-parsonal-info-wrap mb-40">
              <h4 className="bostami-parsonal-info-title">Qui suis-je?</h4>
              <p className="bostami-parsonal-info-bio-text">{about.text}</p>

              <p className="bostami-parsonal-info-bio-text">{about.text2}</p>

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

          {services.map((elm, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6" style={{ display: 'flex' }}>
              <div className={`bostami-what-do-item ${elm.bg}`} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="text">
                  <h4 className="title" style={{display: "flex", alignItems: "center"}}>
                    <div className="icon" style={{ marginRight: 15 }}>
                      <i style={{ fontSize: 30 , fontWeight: "bold" }} className={elm.info.iconFA}></i>
                    </div>
                    <div>{elm.info.title} </div>
                  </h4>
                  <p>{elm.info.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ajout du bouton "En savoir plus" */}
      <div className="text-center mb-40">
        <a 
          href="https://mexar.fr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-2"
          style={{
            padding: '12px 25px',
            borderRadius: '5px',
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          En savoir plus sur mexar.fr
        </a>
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
                <LogosSlider clientLogos={clientLogos} />
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
