import React, { useState, useEffect } from 'react';
import {  Button } from 'react-bootstrap';
const AjouterAppareil = () => {
  const [nomAppareil, setNomAppareil] = useState('');
  const [typeAppareil, setTypeAppareil] = useState('');
  const [etatFonctionnement, setEtatFonctionnement] = useState('');
  const [nomMicrocontroleur, setNomMicrocontroleur] = useState('');
  const [microcontroleurs, setMicrocontroleurs] = useState([]);

  // Supposons que vous ayez une fonction pour charger les microcontrôleurs à partir de l'API
  const chargerMicrocontroleurs = async () => {
    try {
      const response = await fetch('http://localhost:8000/microcontroleurs');
      if (response.ok) {
        const data = await response.json();
        setMicrocontroleurs(data);
      } else {
        console.error('Erreur lors du chargement des microcontrôleurs');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  // Utilisez useEffect pour charger les microcontrôleurs lors du montage du composant
  useEffect(() => {
    chargerMicrocontroleurs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Effectuer la requête POST vers l'endpoint correspondant à l'ajout d'appareil
      const response = await fetch('http://localhost:8000/appareil/ajouter', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomAppareil, typeAppareil, etatFonctionnement, nomMicrocontroleur }),
      });
      if (response.ok) {
        console.log('Appareil ajouté avec succès !');
        // Réinitialiser les champs du formulaire après l'ajout réussi
        setNomAppareil('');
        setTypeAppareil('');
        setEtatFonctionnement('');
        setNomMicrocontroleur('');
      } else {
        console.error('Erreur lors de l\'ajout de l\'appareil');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="fw-bold mb-3 text-center">Ajouter un appareil</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nom de l'appareil :</label>
                  <input type="text" className="form-control" value={nomAppareil} onChange={(e) => setNomAppareil(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Type de l'appareil :</label>
                  <input type="text" className="form-control" value={typeAppareil} onChange={(e) => setTypeAppareil(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">État de fonctionnement :</label>
                  <input type="text" className="form-control" value={etatFonctionnement} onChange={(e) => setEtatFonctionnement(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nom du microcontrôleur :</label>
                  <select className="form-select" value={nomMicrocontroleur} onChange={(e) => setNomMicrocontroleur(e.target.value)}>
                    <option value="">Sélectionner un microcontrôleur</option>
                    {microcontroleurs.map((microcontroleur) => (
                      <option key={microcontroleur.id} value={microcontroleur.nom}>{microcontroleur.nom}</option>
                    ))}
                  </select>
                </div>
                <div className="d-grid mt-3">
          <Button variant="primary" type="submit" className="text-uppercase fw-bold">
            Ajouter
          </Button>
        </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjouterAppareil;
