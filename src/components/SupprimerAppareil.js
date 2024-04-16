// SupprimerAppareil.js

import React, { useState } from 'react';

const SupprimerAppareil = () => {
  const [idAppareil, setIdAppareil] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/appareil/supprimer', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idAppareil,
        }),
      });

      if (response.ok) {
        console.log('Appareil supprimé avec succès !');
        // Réinitialiser l'ID de l'appareil après la suppression
        setIdAppareil('');
      } else {
        console.error('Erreur lors de la suppression de l\'appareil');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div>
      <h2>Supprimer un appareil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idAppareil">ID de l'appareil :</label>
          <input
            type="text"
            id="idAppareil"
            value={idAppareil}
            onChange={(e) => setIdAppareil(e.target.value)}
          />
        </div>
        <button type="submit">Supprimer l'appareil</button>
      </form>
    </div>
  );
};

export default SupprimerAppareil;
