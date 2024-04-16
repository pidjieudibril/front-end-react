import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logodibril from '../images/logodibril.png';
import bg1 from '../images//bg1.jpg'; // Importez l'image bg1.jpg
import bg2 from '../images/bg2.jpg'; // Importez l'image bg2.jpg

const AccueilPage = () => {
  return (
    <div>
      <h2>Bienvenue sur notre site!</h2>
      <p>Ceci est la page d'accueil de notre site. Vous pouvez naviguer vers différentes sections à l'aide de la barre de navigation ci-dessus.</p>
      
      {/* Intégration du carousel avec les images */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={logodibril} alt="Logo" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg1} alt="Background 1" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bg2} alt="Background 2" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AccueilPage;
