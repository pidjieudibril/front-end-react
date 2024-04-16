import React, { useState, useEffect } from 'react';
import MettreAJourAppareil from './MettreAJourAppareil';
import SupprimerAppareil from './SupprimerAppareil';

const AfficherAppareils = () => {
  const [appareils, setAppareils] = useState([]);
  const [selectedAppareil, setSelectedAppareil] = useState(null);

  useEffect(() => {
    const fetchAppareils = async () => {
      try {
        const response = await fetch('http://localhost:8000/appareils');
        if (response.ok) {
          const data = await response.json();
          setAppareils(data);
        } else {
          console.error('Erreur lors de la récupération des appareils');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchAppareils();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/appareil/supprimer/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Appareil supprimé avec succès !');
        setAppareils(appareils.filter(appareil => appareil.id !== id));
      } else {
        console.error('Erreur lors de la suppression de l\'appareil');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  const handleUpdate = (appareil) => {
    setSelectedAppareil(appareil);
  };

  return (
    <div>
      <h2>Liste des appareils</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>État de fonctionnement</th>
            <th>Nom du microcontrôleur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appareils.map((appareil) => (
            <tr key={appareil.id}>
              <td className  = "val">{appareil.nom}</td>
              <td  className  = "val">{appareil.type}</td>
              <td  className  = "val">{appareil.etat_fonctionnement}</td>
              <td  className  = "val">{appareil.nomMicrocontroleur}</td>
              <td>
                <button className="btn btn-success" onClick={() => handleUpdate(appareil)}>Mettre à jour</button>
                <button className="btn btn-danger" onClick={() => handleDelete(appareil.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedAppareil && (
        <>
          <MettreAJourAppareil
            appareil={selectedAppareil}
            setSelectedAppareil={setSelectedAppareil}
          />
          <SupprimerAppareil
            appareil={selectedAppareil}
            setSelectedAppareil={setSelectedAppareil}
          />
        </>
      )}
    </div>
  );
};

export default AfficherAppareils;