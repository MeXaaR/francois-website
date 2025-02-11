import { servicesSection } from "./services/index";

export const socials = [
  {
    id: 3,
    icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/fran%C3%A7ois-aubeut-85b213319/",
  },
  {
    id: 1,
    icon: "fab fa-github",
    href: "https://github.com/MeXaaR/",
  },
  // {
  //   id: 2,
  //   icon: "fab fa-facebook",
  //   href: "#",
  // },
];

const headerData = {
  title: "Mexar - Développeur TypeScript",
  title2: "Bienvenue chez Mexar.",
  title3: "Bienvenue chez Mexar.",
  logo1: "/images/logo.png",
  navItems: [
    {
      id: 1,
      name: "Accueil",
      href: "/",
    },
    {
      id: 2,
      name: "À propos",
      href: "/about-me",
    },
    {
      id: 4,
      name: "Services",
      href: "/services",
      subNavItems: [
        { id: 0, name: "Tous les services", href: "/services" },
        ...servicesSection.services.map(({ info }) => ({
          id: info.id,
          name: info.title,
          href: info.href,
          isNew: false
        }))
      ],
    },
    {
      id: 5,
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 8,
      name: "Contact",
      href: "/contact",
    },
  ],
  address: "60 rue François 1er PARIS",
  phone: "+33 7 68 98 3000",
  phone2: "+33 7 68 98 3000",
  email: "contact@mexar.com",
  icon: "/images/icons/close-1-1.png",
  socials,
  text: "Mexar est une agence digitale spécialisée dans la création d'application mobiles et d'outils professionnels. Votre produit sera livré avec un code solidement documenté",
};

export default headerData;
