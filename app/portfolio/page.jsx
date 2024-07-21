import Header from "@/components/Header";
import Portfolio from "@/components/portfolio/Portfolio";

import Resume from "@/components/resume/Resume";
import React from "react";
export const metadata = {
  title: "Portfolio || François AUBEUT - Développeur Web",
  description: "Découvrez le portfolio de François AUBEUT, développeur web fullstack nomade",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <Header />
        <Portfolio />
      </div>
    </>
  );
}
