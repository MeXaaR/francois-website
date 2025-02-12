import About from "@/components/About";
import Header from "@/components/Header";
import apiClient from "@/utils/apiClient";
import React from "react";

export const metadata = {
  title: "François Aubeut | Développeur Fullstack | A Propos",
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
            <About data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
