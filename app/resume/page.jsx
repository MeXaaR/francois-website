import Header from "@/components/Header";
import Resume from "@/components/resume/Resume";
import React from "react";
export const metadata = {
  title: "Curriculum Vitae | François Aubeut | Développeur Fullstack",
  description: "Découvrez le curriculum vitae de François Aubeut, développeur web fullstack nomade",
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
