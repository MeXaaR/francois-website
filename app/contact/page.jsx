import Contact from "@/components/Contact";

import Header from "@/components/Header";

import React from "react";
export const metadata = {
  title: "Contact || François Aubeut - Développeur Web",
  description:
    "Contactez François Aubeut pour vos projets de développement web, applications mobiles, ou pour toute autre demande.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <Header />
        <Contact />
      </div>
    </>
  );
}
