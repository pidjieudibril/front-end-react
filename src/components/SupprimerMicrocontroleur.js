// SupprimerMicrocontroleur.js

import React, { useState } from 'react';

const SupprimerMicrocontroleur = () => {
  const [idMicrocontroleur, setIdMicrocontroleur] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/microcontroleur/supprimer', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idMicrocontroleur,
        }),
      });

      if (response.ok) {
        console.log('Microcontrôleur supprimé avec succès !');
        // Réinitialiser l'ID du microcontrôleur après la suppression
        setIdMicrocontroleur('');
      } else {
        console.error('Erreur lors de la suppression du microcontrôleur');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div>
      <h2>Supprimer un microcontrôleur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idMicrocontroleur">ID du microcontrôleur :</label>
          <input
            type="text"
            id="idMicrocontroleur"
            value={idMicrocontroleur}
            onChange={(e) => setIdMicrocontroleur(e.target.value)}
          />
        </div>
        <button type="submit">Supprimer le microcontrôleur</button>
      </form>
    </div>
  );
};

export default SupprimerMicrocontroleur;
