"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Modal({ setShowModal, showModal, modalContent }) {

  const { details, tagline } = modalContent || {}

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const modalDialog = document.querySelector(".modal");
      const modalContentDiv = document.querySelector(".modal-content");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        modalDialog &&
        modalContentDiv &&
        !modalContentDiv.contains(event.target) &&
        modalDialog.contains(event.target)
      ) {
        // Your logic for handling the click outside modal-content
        setShowModal(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
      <div
        className={`modal portfolio-modal-box fade ${showModal ? "show" : ""} `}
        id="portfolio-1"
        tabIndex="-1"
        role="dialog"
        style={{
          transition: "0.4s",
          display: `block`,
          visibility: `${showModal ? "visible" : "hidden"}`,
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ borderRadius: '15px', padding: '20px' }}>
            <div className="modal-body">
              <h6 className="blog-title" style={{ 
                fontSize: '2rem', 
                marginBottom: '2rem',
                color: 'var(--theme-secondary)',
                fontWeight: '600'
              }}>{details?.title}</h6>

              <div className="portfolio-modal-table" style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '2rem'
              }}>
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-file-lines" style={{ marginRight: '10px', color: 'var(--theme-secondary)' }}></i>
                      Catégorie : <span >{details?.category}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-regular fa-user" style={{ marginRight: '10px', color: 'var(--theme-secondary)' }}></i>
                      Client : <span >{details?.clients}</span>
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-solid fa-code" style={{ marginRight: '10px', color: 'var(--theme-secondary)' }}></i>
                      Techs :{" "}
                      <span >{details?.technologies.join(", ")}</span>
                    </h3>
                  </div>
                  {!!details?.link && <div className="col-md-6">
                    <h3 className="portfolio-modal-table-text">
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginRight: '10px', color: 'var(--theme-secondary)' }}></i>
                      Preview :{" "}
                      <a href={details?.link} style={{ 
                        color: 'var(--theme-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}>
                        {details?.title}
                      </a>
                    </h3>
                  </div>}
                </div>
              </div>

              <div className="h1-modal-paragraph" style={{ 
                lineHeight: '1.8',
                color: '#e0e0e0',
                marginBottom: '2rem'
              }}>
                <p>{details?.text}</p>
                <p>{details?.text2}</p>
              </div>
              
              {details?.features && details.features.length > 0 && (
                <div className="features-list-container" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  padding: '25px',
                  marginBottom: '2rem'
                }}>
                  <h4 className="features-title" style={{
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem',
                    color: 'var(--theme-secondary)',
                    fontWeight: '600'
                  }}>Fonctionnalités principales</h4>
                  <ul className="features-list" style={{ listStyle: 'none', padding: 0 }}>
                    {details.features.map((feature, index) => (
                      <li key={index} className="feature-item" style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '12px',
                      }}>
                        <i style={{
                          color: "var(--theme-secondary)", 
                          marginRight: 15,
                          fontSize: '0.9rem'
                        }} className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="h1-modal-img" style={{ marginBottom: '2rem' }}>
                {details?.images.length > 1 && (
                  <AnimatePresence>
                      <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 850: 2, 1100: 3 }}
                      >
                        <Masonry>
                          {details?.images.map((image, i) => (
                            <motion.div
                              layout
                              initial={{ opacity: 1, scale: 1 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              key={image}
                              style={{ width: "100%" }}
                            >
                              <div
                                style={{ width: "100%", padding: 5}}
                              >
                                  <Image
                                    width={310}
                                    style={{
                                      width: "100%",
                                      height: "fit-content",
                                    }}
                                    height={310}
                                    src={`${process.env.MEXAR_URL}/images/gallery/${image}`}
                                    alt="portfolio"
                                  />
                              </div>
                            </motion.div>
                          ))}
                        </Masonry>
                      </ResponsiveMasonry>
                    </AnimatePresence>)}
                    {details?.images.length === 1 && (
                       <div
                                style={{ width: "100%", padding: 5}}
                              >
                                  <Image
                                    width={500}
                                    style={{
                                      width: "100%",
                                      height: "fit-content",
                                    }}
                                    height={500}
                                    src={`${process.env.MEXAR_URL}/images/gallery/${details?.images[0]}`}
                                    alt="portfolio"
                                  />
                              </div>
                    )}
              </div>
              
              <div className="text-center mb-40">
                <a 
                  href={`${process.env.MEXAR_URL}/portfolio/${modalContent?.slug}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-2"
                  style={{
                    padding: '15px 30px',
                    borderRadius: '8px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'var(--theme-secondary)',
                    fontWeight: '500',
                    fontSize: '1rem'
                  }}
                >
                  En savoir plus sur mexar.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            onClick={() => setShowModal(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <i className="far fa-times" style={{ color: '#fff' }}></i>
          </button>
        </div>
      )}
    </>
  );
}
