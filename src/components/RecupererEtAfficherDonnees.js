import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const RecupererEtAfficherDonnees = () => {
  const [donnees, setDonnees] = useState([]);

  useEffect(() => {
    const fetchDonnees = async () => {
      try {
        const response = await fetch('http://localhost:8000/donnees');
        if (response.ok) {
          const data = await response.json();
          setDonnees(data);
          afficherGraphiques(data); // Appel de la fonction pour afficher les graphiques
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchDonnees();
  }, []);

  const afficherGraphiques = (data) => {
    data.forEach((donnee) => {
      const ctx = document.getElementById(`graphique-${donnee.capteur}`);
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: donnee.dates,
          datasets: [{
            label: donnee.capteur,
            data: donnee.valeurs,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  };

  return (
    <div>
      <h2>Données récupérées</h2>
      {donnees.map((donnee, index) => (
        <div key={index}>
          <h3>{donnee.capteur}</h3>
          <canvas id={`graphique-${donnee.capteur}`} width="400" height="200"></canvas>
        </div>
      ))}
    </div>
  );
};

export default RecupererEtAfficherDonnees;
