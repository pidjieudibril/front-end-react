import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logodibril from './images/logodibril.png';

const Navbar = () => {
  const location = useLocation(); // Permet de récupérer l'URL actuelle

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logodibril} alt='Logo' className='footer-logo' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
             <NavItem to="/" currentPath={location.pathname}>Accueil</NavItem>
            <NavItem to="/a-propos" currentPath={location.pathname}>A Propos</NavItem>
            <NavItem to="/ajouter-microcontroleur" currentPath={location.pathname}>Ajouter Microcontrôleur</NavItem>
            <NavItem to="/ajouter-appareil" currentPath={location.pathname}>Ajouter Appareil</NavItem>
            <NavItem to="/afficher-appareils" currentPath={location.pathname}>Afficher Appareils</NavItem>
            <NavItem to="/afficher-microcontroleurs" currentPath={location.pathname}>Afficher Microcontrôleurs</NavItem>
            <NavItem to="/recuperer-et-afficher-donnees" currentPath={location.pathname}>Récupérer et Afficher Données</NavItem>
            <NavItem to="/afficher-donnees-appareil" currentPath={location.pathname}>Afficher Données Appareil</NavItem>
            
            {/* Ajoutez d'autres éléments de navigation ici */}
            
            <NavItem to="/contact" currentPath={location.pathname}>Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Composant pour chaque élément de navigation
const NavItem = ({ to, currentPath, children }) => {
  const isActive = currentPath === to; // Vérifie si l'élément est actif

  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link className="nav-link" to={to}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
