import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import logodibril from './images/logodibril.png';
import './footer.css'; // Importez votre fichier CSS
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left footer  ' >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <Link className="navbar-brand" to="/">  <img src={logodibril} alt='Logo' className='footer-logo' /></Link>
          
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Fonctionnalité</h5>

            <ul className='list-unstyled mb-0'>
            
              <li>
              <Link className="nav-link" to="/ajouter-microcontroleur">Ajouter Microcontrôleur</Link>
         </li>
              <li>
              <Link className="nav-link" to="/ajouter-appareil">Ajouter Appareil</Link>
             </li>
             <li className="nav-item">
              <Link className="nav-link" to="/afficher-appareils">Afficher Appareils</Link>
            </li>
            <li>
              <Link className="nav-link" to="/afficher-microcontroleurs">Afficher Microcontrôleurs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recuperer-et-afficher-donnees">Récupérer et Afficher Données</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/afficher-donnees-appareil">Afficher Données Appareil</Link>
            </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Navigation</h5>

            <ul className='list-unstyled'>
            <li>
                
                <Link className="nav-link" to="/">Accueil</Link>
                </li>
                <li>
                
                <Link className="nav-link" to="/a-propos">À Propos</Link>  </li>
                <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://www.linkedin.com/in/dibril-pidjieu-mbakam-943a66202/'>
          dibril pidjieu
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
