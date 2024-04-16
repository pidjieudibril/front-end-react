import React, { useState, useEffect } from 'react';
import MettreAJourMicrocontroleur from './MettreAJourMicrocontroleur';
import SupprimerMicrocontroleur from './SupprimerMicrocontroleur';

const AfficherMicrocontroleurs = () => {
  const [microcontroleurs, setMicrocontroleurs] = useState([]);
  const [selectedMicrocontroleur, setSelectedMicrocontroleur] = useState(null);

  useEffect(() => {
    const fetchMicrocontroleurs = async () => {
      try {
        const response = await fetch('http://localhost:8000/microcontroleurs');
        if (response.ok) {
          const data = await response.json();
          setMicrocontroleurs(data);
        } else {
          console.error('Erreur lors de la récupération des microcontrôleurs');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchMicrocontroleurs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/microcontroleur/supprimer/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Microcontrôleur supprimé avec succès !');
        setMicrocontroleurs(microcontroleurs.filter(mc => mc.id !== id));
      } else {
        console.error('Erreur lors de la suppression du microcontrôleur');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  const handleUpdate = (microcontroleur) => {
    setSelectedMicrocontroleur(microcontroleur);
  };

  return (
    <div>
      <h2>Liste des microcontrôleurs</h2>
      <table className="table">
        <thead>
          <tr className="table1">
            <th className="column ">Nom</th>
            <th className="column ">Adresse IP</th>
            <th className="column ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {microcontroleurs.map((microcontroleur) => (
            <tr className="table1" key={microcontroleur.id}>
              <td className="column"> {microcontroleur.nom}</td>
              <td className="column">{microcontroleur.adresseIP}</td>
              <td className="column">
                <button className="btn btn-success" onClick={() => handleUpdate(microcontroleur)}>Mettre à jour</button>
                <button className="btn btn-danger" onClick={() => handleDelete(microcontroleur.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedMicrocontroleur && (
        <>
          <MettreAJourMicrocontroleur
            microcontroleur={selectedMicrocontroleur}
            setSelectedMicrocontroleur={setSelectedMicrocontroleur}
          />
          <SupprimerMicrocontroleur
            microcontroleur={selectedMicrocontroleur}
            setSelectedMicrocontroleur={setSelectedMicrocontroleur}
          />
        </>
      )}
    </div>
  );
};

export default AfficherMicrocontroleurs;
