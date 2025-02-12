import "../public/assets/css/style.css";
import Header from "@/components/Header";
import PersonalInfo from "@/components/PersonalInfo";
import React from "react";
import apiClient from "@/utils/apiClient";

export const metadata = {
  title: "François Aubeut | Développeur Fullstack | Accueil",
  description:
    "François Aubeut est un développeur web fullstack nomade, spécialisé dans le développement d'applications web et mobiles.",
};
export default async function page() {
  const data = await apiClient.get("/api/about");
  return (
    <>
      <div className="page-wrapper page-wrapper">
        <Header />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <PersonalInfo data={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
