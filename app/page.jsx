import "../public/assets/css/style.css";
import Header from "@/components/Header";
import PersonalInfo from "@/components/PersonalInfo";
import React from "react";

export const metadata = {
  title: "François Aubeut || Accueil",
  description:
    "François Aubeut est un développeur web fullstack nomade, spécialisé dans le développement d'applications web et mobiles.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper">
        <Header />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </>
  );
}
