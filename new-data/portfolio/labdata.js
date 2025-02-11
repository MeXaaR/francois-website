export const carrierWebApp = {
  title: "LabData Carrier",
  clients: "Carrier",
  image: "/images/gallery/labdata.jpg",
  images: ["labdata.jpg"],
  preview: "Outil Professionnel",
  text: "Développement d'une plateforme interne pour Carrier permettant de gérer et de visualiser les données des essais réalisés en laboratoire sur des machines de climatisation, de froid et de chaud. L'application facilite l'affichage, la création et la personnalisation de graphiques en séries temporelles sur plusieurs milliers de points de données.",
  text2: "Cette application intègre un CRUD (Create, Read, Update, Delete) standardisé sur plusieurs modèles de données, offrant des options de personnalisation adaptées à des critères spécifiques à chaque modèle. La base de données est gérée avec PostgreSQL, utilisant l'ORM Prisma pour une gestion efficace et sécurisée des données.",
  date: "2022-2024",
  category: "Outil Professionnel",
  categories: ["Développement", "Analyse de Données", "Graphiques", "Gestion de Données"],
  features: [
    "Gestion et visualisation des données des essais en laboratoire",
    "Création et personnalisation de graphiques en séries temporelles",
    "CRUD standardisé sur plusieurs modèles de données",
    "Options de personnalisation avancées en fonction des critères spécifiques",
    "Gestion de bases de données avec PostgreSQL et Prisma ORM",
    "Documentation TypeScript solide et fiable grâce à Pothos",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Prisma",
    "GraphQL",
    "PostgreSQL",
    "Pothos",
  ],
  challenges: [
    {
      challenge: "Gestion de grandes quantités de données en temps réel",
      solution: "Utilisation de GraphQL pour des requêtes optimisées et React pour une interface utilisateur réactive.",
    },
    {
      challenge: "Personnalisation des graphiques en fonction de critères spécifiques",
      solution: "Développement de composants graphiques flexibles permettant une personnalisation avancée selon les besoins du client.",
    },
    {
      challenge: "Assurer une documentation solide et fiable",
      solution: "Automatisation de la génération de types et de la documentation avec Prisma et Pothos, garantissant une maintenabilité optimale du code.",
    },
  ],
};
