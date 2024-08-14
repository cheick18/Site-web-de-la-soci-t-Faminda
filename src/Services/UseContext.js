import { createTheme } from "@mui/material";
import React, { createContext } from "react";


// Création du contexte avec une valeur par défaut
const myContext = createContext({
  theme: null, // Définition initiale du thème
});

// Fonction pour consommer le contexte
export function UseContext() {
  return React.useContext(myContext);
}

// Composant fournisseur de contexte
export function ContextProvider({ children }) {
  // Définition du thème avec createTheme (exemple avec MUI)
  const theme = createTheme({
    palette: {
      primary: {
       
        main: '#212A39',
       
      },
      secondary: {
       
        main: '#359AF2',
       
      },
    },
  });

  return (
    <myContext.Provider value={{ theme }}>
      {children} {/* Rendre les enfants disponibles pour les composants consommateurs */}
    </myContext.Provider>
  );
}
