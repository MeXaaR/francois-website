import contactInfos from "./contactInfos";

export const contactSection = {
  inputs: [
    {
      name: "username",
      type: "text",
      placeholder: "Votre Nom",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Adresse Email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Numéro de Téléphone",
      required: true,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Sujet",
      required: true,
    },
    {
      name: "message",
      placeholder: "Écrire un Message",
      required: true,
    },
  ],
  title: "Où vous pouvez me trouver",
  contacts: [
    {
      id: 1,
      name: "Paris",
      address: "60 rue François 1er, 75008 Paris",
      email: contactInfos.email,
      phone: contactInfos.phone,
    },
    {
      id: 2,
      name: "La Cantine",
      address: "27 rue Aubuisson, 31000 Toulouse",
      email: contactInfos.email,
      phone: contactInfos.phone,
    },
  ],
};
