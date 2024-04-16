import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const AjouterMicrocontroleur = () => {
  const [nom, setNom] = useState('');
  const [adresseIP, setAdresseIP] = useState('');

  const handleChangeNom = (event) => {
    setNom(event.target.value);
  };

  const handleChangeAdresseIP = (event) => {
    setAdresseIP(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Soumission du formulaire...');
    try {
      const response = await fetch('http://localhost:8000/microcontroleur/ajouter1', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, adresseIP }),
      });
      if (response.ok) {
        console.log('Microcontrôleur ajouté avec succès !');
        setNom('');
        setAdresseIP('');
      } else {
        console.error('Erreur lors de l\'ajout du microcontrôleur');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
    }
  };

  return (
    <div>
      <h2 className="fw-bold mb-3 text-center">Ajouter un microcontrôleur</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Nom :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le nom"
            value={nom}
            onChange={handleChangeNom}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Adresse IP :</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Entrez l'adresse IP au format 0.0.0.0"
              value={adresseIP}
              onChange={handleChangeAdresseIP}
            />
          </InputGroup>
        </Form.Group>
        <div className="d-grid mt-3">
          <Button variant="primary" type="submit" className="text-uppercase fw-bold">
            Ajouter
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AjouterMicrocontroleur;
