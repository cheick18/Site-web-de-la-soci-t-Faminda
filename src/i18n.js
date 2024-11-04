import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Réalisations":"achievements",
      "Contactez-nous":"Contact us",
      "À propos":'About',
        "Langue":'Language',
        "Confiance Partagée avec Nos Partenaires":"Shared Trust with Our Partners",
        "Innovations pour un Monde Durable":"Innovations for a Sustainable World",
        "description":"At Faminda, we align creativity and sustainability to design environmentally friendly spaces. By integrating eco-friendly materials and optimized energy solutions, we create projects that are both functional and aesthetically pleasing. Discover how our innovations are shaping a greener and more sustainable future",
        "Faminda Concept":" Faminda Concept, Engineering and Architecture Design Office",
        "Faminda description":"Faminda is a design office specialized in civil engineering and architecture. We offer a comprehensive range of services to meet the needs of our clients across various fields",
        "Anglais":"English",
        "Francais":"Frensh",
        "À Découvrir : Nos Projets":"To Discover: Our Projects",
        "Nous Construisons L'avenir":"We Build the Future",
        "Découvrez Notre Savoir-Faire":"Discover Our Expertise",
        "Études architecturales et suivi des projets":"Architectural studies and project monitoring",
        "Calcul de structure pour bâtiments à tous usages":"Structural calculation for buildings of all uses",
         "Études générales":"General studies",
         "Hydraulique urbaine":"Urban hydraulics",
         "Routes, autoroutes et transports":"Roads, highways, and transportation",
         "Ouvrages d’art":"Civil Engineering Structures",
         "Barrages":"Dams",
         "Travaux maritimes et fluviaux":"Marine and river works",
         "Travaux du génie de défense à caractère spécifique":"Specific defense engineering works",
         "Réseaux des fluides pour bâtiments":"Fluid networks for buildings",
         "Voirie, réseaux d’assainissement et eau potable":"Roads, sanitation networks, and drinking water",
         "Études d’impact sur l’environnement":"Environmental impact studies",
         "Sécurité contre l’incendie dans les constructions":"Fire safety in constructions",
         "Calcul de structures en béton armé, béton précontraint, charpente métallique et charpente en bois":"Structural calculation of reinforced concrete, prestressed concrete, steel framework, and timber framework",
         "Calcul de strucure 2":"Design and sizing for residential, industrial, commercial, educational, medical, and other buildings",
         "Études architecturales1":"Technical analysis and architectural Design",
         "Études architecturales2":"Supporting documents such as plans, sections, elevations, and digital models",
         "etudes-generales1":"Planning, project management, economics, sociology, meteorology, environmental impact, and quality",
         "etudes-generales2":"Human resources training and upgrading",
         "hydraulique1":"Water supply and distribution",
         "hydraulique2":"Urban sanitation, drinking water treatment, and wastewater treatment",
         "Tous droits réservés":"All rights reserved",
         "Routes_auto1":"Design and planning of roads, highways, and railways",
         "Routes_auto2":"Airport infrastructure and small structures (culverts, drains)",
         "Ouvrages1":"Bridges, aqueducts, reservoirs, and tunnels",
         "Ouvrages2":"Structure diagnostics and non-destructive testing",
         "Barrages1":"Design and construction of large dams and hill dams",
         
         "Travaux maritimes1":"Maritime and river ports",
         "Travaux maritimes2":"River management",
         "Travaux du génie1":"Construction of shelters and fortifications",
         "Travaux du génie2":"Logistical support, tactical mobility, and counter-mobility",
         "Réseaux des fluides1":"Plumbing, sanitation, heating, air conditioning, and mechanical ventilation",
          "Réseaux des fluides2":"Medical gases",
          "Voirie, réseaux1":"Water supply and distribution",
          "Voirie, réseaux2":"Urban sanitation, drinking water treatment, and wastewater treatment",
            "Études d’impact1":"Environmental assessments in compliance with current laws and regulations",
            "Sécurité contre1":"Prevention and safety measures to protect buildings from fires"
        } 
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
       "Réalisations":"Réalisations",
        "Contactez-nous":"Contactez-nous",
         "À propos":'à propos',
         "Langue":'Langue',
           "Confiance Partagée avec Nos Partenaires":"Confiance Partagée avec Nos Partenaires",
           "Innovations pour un Monde Durable":"Innovations pour un Monde Durable",
           "description":"Chez Faminda, nous allignons créativité et durabilité pour concevoir des espaces respectueux de l'environnement. En intégrant des matériaux écologiques et des solutions énergétiques optimisées, nous créons des projets à la fois fonctionnels et esthétiques. Découvrez comment nos innovations façonnent un avenir plus vert et durable",
             "Faminda Concept":"Faminda Concept, Bureau d'Études en Génie Civil et Architecture",
            "Faminda description":"Faminda est un bureau d’études spécialisé en génie civil et architecture. Nous offrons une gamme complète de services pour répondre aux besoins de nos clients dans divers domaines",
             "Anglais":"Anglais",
              "Francais":"Français",
              "À Découvrir : Nos Projets":"À Découvrir : Nos Projets",
              "Nous Construisons L'avenir":"Nous Construisons L'avenir",
              "Découvrez Notre Savoir-Faire":"Découvrez Notre Savoir-Faire",
              "Études architecturales et suivi des projets":"Études architecturales et suivi des projets",
             "Calcul de structure pour bâtiments à tous usages":"Calcul de structure pour bâtiments à tous usages",
             "Études générales":"Études générales",
              "Hydraulique urbaine":"Hydraulique urbaine",
              "Routes, autoroutes et transports":"Routes, autoroutes et transports",
              "Ouvrages d’art":"Ouvrages d’art",
              "Barrages":"Barrages",
              "Travaux maritimes et fluviaux":"Travaux maritimes et fluviaux",
              "Travaux du génie de défense à caractère spécifique":"Travaux du génie de défense à caractère spécifique",
              "Réseaux des fluides pour bâtiments":"Réseaux des fluides pour bâtiments",
              "Voirie, réseaux d’assainissement et eau potable":"Voirie, réseaux d’assainissement et eau potable",
              "Études d’impact sur l’environnement":"Études d’impact sur l’environnement",
              "Sécurité contre l’incendie dans les constructions":"Sécurité contre l’incendie dans les constructions",
              "Calcul de structures en béton armé, béton précontraint, charpente métallique et charpente en bois":"Calcul de structures en béton armé, béton précontraint, charpente métallique et charpente en bois",
              "Calcul de strucure 2":"Conception et dimensionnement pour des bâtiments résidentiels, industriels,commerciaux, éducatifs, médicaux et autres",
              "Études architecturales1":"Analyse technique et conception architecturale",
              "Études architecturales2":"Documents d’appui tels que plans, coupes, élévations et maquettes numériques",
              "etudes-generales1":"Planification, gestion de projet, économie, sociologie, météorologie, impact environnemental et qualité",
              "etudes-generales2":"Formation des ressources humaines et mise à niveau",
              "hydraulique1":"Adduction et distribution d’eau",
              "hydraulique2":"Assainissement urbain, traitement de l’eau potable et épuration des eaux résiduaires",
              "Tous droits réservés":"Tous droits réservés",
              "Routes_auto1":"Conception et planification de routes, autoroutes et voies ferrées",
              "Routes_auto2":"Infrastructures aéroportuaires et petits ouvrages (ponceaux, dalots)",
              "Ouvrages1":"Ponts, aqueducs, réservoirs et tunnels",
              "Ouvrages2":"Diagnostic d’ouvrages et contrôles non destructifs",
              "Barrages1":"Conception et construction de grands barrages et barrages collinaires",
              "Travaux maritimes1":"Ports maritimes et fluviaux",
              "Travaux maritimes2":"Aménagement des cours d’eau",
              "Travaux du génie1":"Construction d’abris et de fortifications",
              "Travaux du génie2":"Soutien logistique, mobilité tactique et contre-mobilité",
              "Réseaux des fluides1":"Plomberie, assainissement, chauffage, climatisation et ventilation mécanique",
               "Réseaux des fluides2":"Fluides médicaux",
              "Voirie, réseaux1":"Adduction et distribution d’eau",
              "Voirie, réseaux2":"Assainissement urbain, traitement de l’eau potable et épuration des eaux résiduaires",
              "Études d’impact1":"Évaluations environnementales conformes aux lois et règlements en vigueur",
               "Sécurité contre1":"Mesures de prévention et de sécurité pour protéger les bâtiments contre les incendies"
    },
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;