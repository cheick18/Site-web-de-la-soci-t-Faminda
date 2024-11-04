import React, { createContext,useState } from 'react';


import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Homes from './Pages/Homes';
import TestVideo from './Pages/TestVideo'
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import  logo from './Components/logo.png';
import HotelWave from '../src/Pages/HotelWave'
import UniversiteOdienne from '../src/Pages/UniversiteOdienne'
import  ConstructionCentreculturelBerkane from '../src/Pages/ConstructionCentreculturelBerkane'
import RefectionEquipement from '../src/Pages/RefectionEquipement'
import ContructionStudentCenter from '../src/Pages/ContructionStudentCenter'
import ConstructionExtensionAcademique from '../src/Pages/ConstructionExtensionAcademique'
import ConstructionImmeubleKinshasa from '../src/Pages/ConstructionImmeubleKinshasa'
import VillaKishasa from '../src/Pages/VillaKishasa'
import RouteKetama from '../src/Pages/RouteKetama'
import Vllakishasar3 from '../src/Pages/Vllakishasar3'
import CalculStrucure from '../src/Pages/CalculStrucure'
import EtudesArchitecurales from '../src/Pages/EtudesArchitecurales'
import EtudesGenerales from '../src/Pages/EtudesGenerales'
import HydrauliqueUrbaine from '../src/Pages/HydrauliqueUrbaine'
import RoutesAutoroutes from '../src/Pages/RoutesAutoroutes'
import OuvragesArt from '../src/Pages/OuvragesArt'
import Barrages from '../src/Pages/Barrages'
import TravauxMaritimes from '../src/Pages/TravauxMaritimes'
import TravaauxDefense from '../src/Pages/TravaauxDefense'
import ReseauFluide from '../src/Pages/ReseauFluide'
import EtudesImpact from '../src/Pages/EtudesImpact'
import VoirieResaux from '../src/Pages/VoirieResaux'
import SecutieIncendie from '../src/Pages/SecutieIncendie'
import { useTranslation } from 'react-i18next';




import { AppBar, Toolbar, Typography, Container, Stack, Button, createTheme, ThemeProvider, useMediaQuery } from '@mui/material'; // Importez les composants nécessaires depuis MUI
import Realisations from './Pages/Realisations';
import Service from './Pages/Service';
import DetailRealisation from './Components/DetailRealisation';
import Arrow from './Components/Arrow';


const UserContext = createContext()

function App() {


  const { t, i18n } = useTranslation();
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
    <UserContext.Provider >
      <div className="App">
          <ThemeProvider theme={theme}>
    
         <Navbar />
        <div style={{padding:0}}>
          <Outlet />
          <Arrow />
      
          <Routes>
            <Route path="/" element={<Homes t={t} i18n={i18n} />} />
            <Route path="/contact" element={<Contact t={t} i18n={i18n}/>} />
            <Route path="/about" element={<About t={t} i18n={i18n} />} />
            <Route path="/realisations" element={<Realisations t={t} i18n={i18n} />} />
            <Route path="/test" element={<TestVideo />} />
            
          
          {/** <Route path="/service" element={<Service />} /> */} 
          <Route path="/calcul-structures-batiments" element={<CalculStrucure  t={t} i18n={i18n} />} />
          <Route path="/etudes-architecturales-suivi-projets" element={<EtudesArchitecurales  t={t} i18n={i18n} />} />
          <Route path="/etudes-generales" element={<EtudesGenerales  t={t} i18n={i18n} />} />
          <Route path="/barrages" element={<Barrages  t={t} i18n={i18n} />} />
          <Route path="/hydraulique-urbaine" element={<HydrauliqueUrbaine  t={t} i18n={i18n} />} />
          <Route path="/routes-autoroutes-transports" element={<RoutesAutoroutes  t={t} i18n={i18n} />} />
          <Route path="/ouvrages-d-art" element={<OuvragesArt  t={t} i18n={i18n} />} />
          <Route path="/travaux-maritimes-fluviaux" element={<TravauxMaritimes  t={t} i18n={i18n} />} />
          <Route path="/travaux-genie-defense-caractere-specific" element={<TravaauxDefense t={t} i18n={i18n} />}   />
          <Route path="/reseaux-fluides-batiments" element={<ReseauFluide  t={t} i18n={i18n} />} />
          <Route path="/voirie-reseaux-assainissement-eau-potable" element={<VoirieResaux  t={t} i18n={i18n} />} />
          <Route path="/etudes-impact-environnement" element={<EtudesImpact  t={t} i18n={i18n} />} />
          <Route path="/securite-contre-incendie-constructions" element={<SecutieIncendie t={t} i18n={i18n} />}  t={t} i18n={i18n} />
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
          <Route path="/hotel-wave" element={<HotelWave />} />
          <Route path="/universite-odienne" element={<UniversiteOdienne />} />
           
          <Route path="/construction-extension-academique-universite-al-khawayne-ifrane" element={<ConstructionExtensionAcademique />} />
          <Route path="/construction-immeuble-appartement-r2-kinshasa" element={<RefectionEquipement />} />
          <Route path="/construction-villa-unifamiliale-kinshasa" element={<VillaKishasa />} />
          <Route path="/construction-student-center-universite-al-khawayne-ifrane" element={<ContructionStudentCenter />} />
          <Route path="/construction-immeuble-appartements-r2-kinshasa" element={<ConstructionImmeubleKinshasa />} />
          <Route path="/ecole-verte-zenata-primaire-college-lycee" element={<RouteKetama />} />
          <Route path="/construction-immeuble-appartements-r3-kinshasa" element={<Vllakishasar3 />} />
            
            
            
            
            
            
            

            <Route path="/Deatils" element={<DetailRealisation />} />

            <Route path="/*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>


        </div>
        </ThemeProvider>
      </div>
      </UserContext.Provider>

  );
}

export default App;
