import React from "react";
import Header from "@/components/Header";
import Portfolio from "@/components/portfolio/Portfolio";
import apiClient from "@/utils/apiClient";

export const metadata = {
  title: "François Aubeut | Développeur Fullstack | Portfolio",
  description: "Découvrez le portfolio de François Aubeut, développeur web fullstack nomade",
};

export default async function page() {
  const data = await apiClient.get("/api/portfolio");
  const { portfolio } = data
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Portfolio portfolio={portfolio} />
      </div>
    </>
  );
}
