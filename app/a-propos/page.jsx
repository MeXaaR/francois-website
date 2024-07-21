import About from "@/components/About";
import Header from "@/components/Header";
import React from "react";
export const metadata = {
  title: "A Propos || François AUBEUT - Développeur Web",
  description:
    "Découvrez François AUBEUT, développeur web fullstack, spécialisé en ReactJS, NextJS, Meteor, MongoDB, Prisma, Svelte, GraphQL, Apollo, TypeScript, Material UI, Bulma, Styled Components, Redux",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper">
        <Header />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
