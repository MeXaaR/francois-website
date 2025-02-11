import contactInfos from "./contactInfos";
import { servicesSection } from "./services";

export const sidebar = {
  title: "Tous les Services",
  title2: "besoin d'aide ?",
  text: "Préférez-vous parler à un humain plutôt que de remplir un formulaire? Appelez moi et voyons comment travailler ensemble sur votre problématique",
  phone: contactInfos.phone,
  navItems: servicesSection.services.map(({ info }) => ({ ...info }))
};
