import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Homes from './Pages/Homes';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import  logo from './Components/logo.png';
import  ConstructionCentreculturelBerkane from '../src/Pages/ConstructionCentreculturelBerkane'
import RefectionEquipement from '../src/Pages/RefectionEquipement'
import ContructionStudentCenter from '../src/Pages/ContructionStudentCenter'
import ConstructionExtensionAcademique from '../src/Pages/ConstructionExtensionAcademique'
import ConstructionImmeubleKinshasa from '../src/Pages/ConstructionImmeubleKinshasa'
import VillaKishasa from '../src/Pages/VillaKishasa'
import RouteKetama from '../src/Pages/RouteKetama'
import Vllakishasar3 from '../src/Pages/Vllakishasar3'




import { AppBar, Toolbar, Typography, Container, Stack, Button, createTheme, ThemeProvider, useMediaQuery } from '@mui/material'; // Importez les composants nécessaires depuis MUI
import Realisations from './Pages/Realisations';
import Service from './Pages/Service';
import DetailRealisation from './Components/DetailRealisation';



function App() {



  const theme = createTheme({
    palette: {
      primary: {
       
        main: '#212A39',
       
      },
      secondary: {
       
        main: '#359AF2',
       
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1100,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Montserrat',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
 
      <div className="App">
          <ThemeProvider theme={theme}>
    
         <Navbar />
        <div style={{padding:0}}>
          <Outlet />
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/realisations" element={<Realisations />} />
          
          {/** <Route path="/service" element={<Service />} /> */} 
          <Route path="/calcul-structures-batiments" element={<Service />} />
          <Route path="/etudes-architecturales-suivi-projets" element={<Service />} />
          <Route path="/etudes-generales" element={<Service />} />
          <Route path="/barrages" element={<Service />} />
          <Route path="/hydraulique-urbaine" element={<Service />} />
          <Route path="/routes-autoroutes-transports" element={<Service />} />
          <Route path="/ouvrages-d-art" element={<Service />} />
          <Route path="/travaux-maritimes-fluviaux" element={<Service />} />
          <Route path="/travaux-genie-defense-caractere-specific" element={<Service />} />
          <Route path="/reseaux-fluides-batiments" element={<Service />} />
          <Route path="/voirie-reseaux-assainissement-eau-potable" element={<Service />} />
          <Route path="/etudes-impact-environnement" element={<Service />} />
          <Route path="/securite-contre-incendie-constructions" element={<Service />} />
          {/**routes realisation detail  Construction-centreculturel-Berkane
           * 
           * construction-student-center-universite-al-khawayne-ifrane
           * construction-immeuble-appartement-r2-kinshasa
           * construction-villa-unifamiliale-kinshasa
              construction-student-center-universite-al-khawayne-ifrane
               construction-route-retama


           */}
          <Route path="/construction-centreculturel-berkane" element={<ConstructionCentreculturelBerkane />} />
          <Route path="/refection-remise-en-etat-equipements-lotissement" element={<RefectionEquipement />} />
           
          <Route path="/construction-extension-academique-universite-al-khawayne-ifrane" element={<ConstructionExtensionAcademique />} />
          <Route path="/construction-immeuble-appartement-r2-kinshasa" element={<RefectionEquipement />} />
          <Route path="/construction-villa-unifamiliale-kinshasa" element={<VillaKishasa />} />
          <Route path="/construction-student-center-universite-al-khawayne-ifrane" element={<ContructionStudentCenter />} />
          <Route path="/construction-immeuble-appartements-r2-kinshasa" element={<ConstructionImmeubleKinshasa />} />
          <Route path="/construction-route-retama" element={<RouteKetama />} />
          <Route path="/construction-immeuble-appartements-r3-kinshasa" element={<Vllakishasar3 />} />
            
            
            
            
            
            
            

            <Route path="/Deatils" element={<DetailRealisation />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        </ThemeProvider>
      </div>

  );
}

export default App;
