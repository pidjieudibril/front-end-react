import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AccueilPage from './pages/AccueilPage';
import AProposPage from './pages/AProposPage';
import ContactPage from './pages/ContactPage';
import AjouterMicrocontroleurPage from './pages/AjouterMicrocontroleurPage';
import AjouterAppareilPage from './pages/AjouterAppareilPage';
import AfficherAppareilsPage from './pages/AfficherAppareilsPage';
import AfficherMicrocontroleursPage from './pages/AfficherMicrocontroleursPage';
import RecupererEtAfficherDonneesPage from './pages/RecupererEtAfficherDonneesPage';
import AfficherDonneesAppareilPage from './pages/AfficherDonneesAppareilPage'; // Importer le composant
import MettreAJourAppareilPage from './pages/MettreAJourAppareilPage';
import SupprimerAppareilPage from './pages/SupprimerAppareilPage';
import MettreAJourMicrocontroleurPage from './pages/MettreAJourMicrocontroleurPage';
import SupprimerMicrocontroleurPage from './pages/SupprimerMicrocontroleurPage';
import AfficherDonneesAppareil from './components/AfficherDonneesAppareil';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ajouter-microcontroleur" element={<AjouterMicrocontroleurPage />} />
          <Route path="/ajouter-appareil" element={<AjouterAppareilPage />} />
          <Route path="/afficher-appareils" element={<AfficherAppareilsPage />} />
          <Route path="/afficher-microcontroleurs" element={<AfficherMicrocontroleursPage />} />
          <Route path="/recuperer-et-afficher-donnees" element={<RecupererEtAfficherDonneesPage />} />
          <Route path="/afficher-donnees-appareil" element={<AfficherDonneesAppareilPage />} /> {/* Nouvelle route avec un paramètre nomAppareil */}
          <Route path="/afficher-donnees-appareil/:nomAppareil" element={<AfficherDonneesAppareil />} />
 
          <Route path="/mettre-a-jour-appareil" element={<MettreAJourAppareilPage />} />
          <Route path="/supprimer-appareil" element={<SupprimerAppareilPage />} />
          <Route path="/mettre-a-jour-microcontroleur" element={<MettreAJourMicrocontroleurPage />} />
          <Route path="/supprimer-microcontroleur" element={<SupprimerMicrocontroleurPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
