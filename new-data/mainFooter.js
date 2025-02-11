import contactInfos from "./contactInfos";

export const footer = { year: new Date().getFullYear(), author: "mexar" };

export const mainFooter = {
  logo: "/images/logo.png",
  bg: "/images/background/footer-bg-2.jpg",
  text: "Bienvenue sur le site de Mexar. Ici, vous pouvez tout apprendre sur mes services et mon portfolio.",
  address: contactInfos.address,
  phone: contactInfos.phone,
  email: contactInfos.email,
  socials: contactInfos.socials,
  links: [
    {
      id: 1,
      href: "/about-me",
      title: "À propos",
    },
    {
      id: 2,
      href: "/services",
      title: "Services",
    },
    {
      id: 3,
      href: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 5,
      href: "/contact",
      title: "Contact",
    },
  ],
  ...footer,
};
