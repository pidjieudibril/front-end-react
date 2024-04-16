// MettreAJourAppareil.js

import React, { useState } from 'react';

const MettreAJourAppareil = () => {
  const [nomAppareil, setNomAppareil] = useState('');
  const [typeAppareil, setTypeAppareil] = useState('');
  const [etatFonctionnement, setEtatFonctionnement] = useState('');
  const [idMicrocontroleur, setIdMicrocontroleur] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/appareil/mettre-a-jour', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nomAppareil,
          typeAppareil,
          etatFonctionnement,
          idMicrocontroleur,
        }),
      });

      if (response.ok) {
        console.log('Appareil mis à jour avec succès !');
        // Réinitialiser les champs après la mise à jour
        setNomAppareil('');
        setTypeAppareil('');
        setEtatFonctionnement('');
        setIdMicrocontroleur('');
      } else {
        console.error('Erreur lors de la mise à jour de l\'appareil');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div>
      <h2>Mettre à jour un appareil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomAppareil">Nom de l'appareil :</label>
          <input
            type="text"
            id="nomAppareil"
            value={nomAppareil}
            onChange={(e) => setNomAppareil(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="typeAppareil">Type de l'appareil :</label>
          <input
            type="text"
            id="typeAppareil"
            value={typeAppareil}
            onChange={(e) => setTypeAppareil(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="etatFonctionnement">État de fonctionnement :</label>
          <input
            type="text"
            id="etatFonctionnement"
            value={etatFonctionnement}
            onChange={(e) => setEtatFonctionnement(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idMicrocontroleur">ID du microcontrôleur :</label>
          <input
            type="text"
            id="idMicrocontroleur"
            value={idMicrocontroleur}
            onChange={(e) => setIdMicrocontroleur(e.target.value)}
          />
        </div>
        <button type="submit">Mettre à jour l'appareil</button>
      </form>
    </div>
  );
};

export default MettreAJourAppareil;
