import Header from "@/components/Header";
import Resume from "@/components/resume/Resume";
import React from "react";
export const metadata = {
  title: "François Aubeut | Développeur Fullstack | Mon Parcours",
  description: "Découvrez le parcours de François Aubeut, développeur web fullstack nomade",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper">
        <Header />

        <Resume />
      </div>
    </>
  );
}
