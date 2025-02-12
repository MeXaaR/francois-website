
import apiClient from "@/utils/apiClient";
import Image from "next/image";

export default async function Contact() {
  const data = await apiClient.get("/api/contact");

  const { contact } = data

  return (
    <div className="bostami-page-area z-index-3">
      <div className="container">
        <div className="bostami-page-wrap pt-60 pl-80 pr-80">
          <div className="page-tilte-2-wrap">
            <div className="row">
              <div className="col-12">
                <div className="bostami-page-title-wrap mb-40">
                  <h2 className="page-title">contact</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="bostami-contact-2-wrap">
            <div className="row">
              <div className="col-xl-4 col-lg-12">
                <div className="bostami-contact-2-item-wrap mb-60">
                  <div className="row">

                    <div  className="col-xl-12 col-lg-6">
                        <div
                          className={`bostami-contact-item bg-prink mb-30`}
                        >
                          <div className="icon">
                            <Image
                              width={40}
                              height={40}
                              src="/assets/img/icon/phone-call.png"
                              alt="contact"
                            />
                          </div>
                          <div className="text">
                            <h5 className="title">Téléphone :</h5>
                            <span>{contact.phone}</span>
                          </div>
                        </div>
                      </div>

                       <div  className="col-xl-12 col-lg-6">
                        <div
                          className={`bostami-contact-item bg-catkrill mb-30`}
                        >
                          <div className="icon">
                            <Image
                              width={40}
                              height={40}
                              src="/assets/img/icon/email-icon.png"
                              alt="contact"
                            />
                          </div>
                          <div className="text">
                            <h5 className="title">Email :</h5>
                            <span>{contact.email}</span>
                          </div>
                        </div>
                      </div>


                       <div  className="col-xl-12 col-lg-6">
                        <div
                          className={`bostami-contact-item bg-prink mb-30`}
                        >
                          <div className="icon">
                            <Image
                              width={40}
                              height={40}
                              src="/assets/img/icon/map-icon.png"
                              alt="contact"
                            />
                          </div>
                          <div className="text">
                            <h5 className="title">Adresse :</h5>
                            <span style={{
                              textTransform: "capitalize", 
                              wordBreak: "break-word"
                              }}>{contact.address.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</span>
                          </div>
                        </div>
                      </div>

                  </div>
                </div>
              </div>

              <div className="col-xl-8  col-lg-12">
                <div className="contact-area bg-light-white-2 mb-60">
                  <h5 className="contact-title">
                    Je suis toujours ouvert à de nouvelles discussions pour un projet de développement web,
                  </h5>
                  <h5 className="contact-title-b">d'applications mobiles, de design ou de partenariats.</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center pt-25 pb-25 bg-light-white-2 border-redius-20">
            <span>
              © {new Date().getFullYear()} Tous droits réservés par Francois Aubeut.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
