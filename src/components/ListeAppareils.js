import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListeAppareils = () => {
  const [appareils, setAppareils] = useState([]);

  useEffect(() => {
    // Effectuez une requête pour récupérer la liste des appareils depuis votre API
    const fetchAppareils = async () => {
      try {
        const response = await fetch('http://localhost:8000/appareils');
        if (response.ok) {
          const data = await response.json();
          setAppareils(data);
        } else {
          console.error('Erreur lors de la récupération de la liste des appareils');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchAppareils();
  }, []);

  return (
    <div>
      <h2>Liste des appareils</h2>
      {appareils.map((appareil) => (
        <div key={appareil.id} style={{ marginBottom: '10px' }}>
          <button style={{ marginRight: '10px' }}>
            <Link to={`/afficher-donnees-appareil/${appareil.nom}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {appareil.nom}
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListeAppareils;
