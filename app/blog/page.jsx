import Blogs from "@/components/Blogs";
import Header from "@/components/Header";

import React from "react";
export const metadata = {
  title: "Blog-2 || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <Header />
        <Blogs />
      </div>
    </>
  );
}
