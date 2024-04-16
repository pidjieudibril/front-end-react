// MettreAJourMicrocontroleur.js

import React, { useState } from 'react';

const MettreAJourMicrocontroleur = () => {
  const [nomMicrocontroleur, setNomMicrocontroleur] = useState('');
  const [adresseIP, setAdresseIP] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/microcontroleur/mettre-a-jour', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomMicrocontroleur,
          adresseIP,
        }),
      });

      if (response.ok) {
        console.log('Microcontrôleur mis à jour avec succès !');
        // Réinitialiser les champs après la mise à jour
        setNomMicrocontroleur('');
        setAdresseIP('');
      } else {
        console.error('Erreur lors de la mise à jour du microcontrôleur');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div>
      <h2>Mettre à jour un microcontrôleur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomMicrocontroleur">Nom du microcontrôleur :</label>
          <input
            type="text"
            id="nomMicrocontroleur"
            value={nomMicrocontroleur}
            onChange={(e) => setNomMicrocontroleur(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="adresseIP">Adresse IP :</label>
          <input
            type="text"
            id="adresseIP"
            value={adresseIP}
            onChange={(e) => setAdresseIP(e.target.value)}
          />
        </div>
        <button type="submit">Mettre à jour le microcontrôleur</button>
      </form>
    </div>
  );
};

export default MettreAJourMicrocontroleur;
