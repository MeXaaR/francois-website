"use client";

import { menuItems } from "@/data/menu";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MenuTwo from "./MenuTwo";
import useThemeStore from '@/store/useThemeStore'

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore()

  return (
    <div className="bostami-header-area mb-80 z-index-5">
      <div className="container">
        <div className="bostami-header-wrap main-style-2">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-4 col-4 d-flex align-items-center">
              <div className="bostami-header-logo">
              <Link className="site-logo" href="/">
                    <Image
                    width={50}
                    height={50}
                    src={!isDarkMode ? "/assets/img/logo/logo-white.png" : "/assets/img/logo/logo-2.png"}
                    alt="logo"
                />
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-md-6 col-sm-8 col-8">
              <div className="header-right-flex">
                <div className="bostami-main-menu-wrap ">
                  <nav className="bastami-main-menu main_menu">
                    <ul style={{ display: "flex", alignItems: "center" }}>

                      {menuItems.map((elm, i) => (
                        <li
                          key={i}
                          className={pathname == elm.href ? "active" : ""}
                        >
                          <Link
                            href={elm.href}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span style={{ fontSize: "21px" }}>
                              <i className={elm.icon}></i>
                            </span>
                            <span> {elm.text.toLowerCase()}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="bostami-header-menu-btn text-right ml-30">
                  <div
                    className="dark-btn dark-btn-2 mode-btn"
                    onClick={toggleTheme}
                  >
                    {isDarkMode ? (
                      <i className="sunicon fa-light fa-sun-bright"></i>
                    ) : (
                      <i className="moonicon fa-solid fa-moon"></i>
                    )}
                  </div>
                  <div className="menu-btn-wrap d-lg-none">
                    <div
                      className={`menu-btn menu-btn-2 toggle_menu ${menuOpen && "active"} `}
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-wrap">
          <div className={`mobile-menu mobile_menu ${menuOpen && "active"} `}>
            <MenuTwo setMenuOpen={setMenuOpen} data={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
