import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Chart from 'chart.js/auto';

const AfficherDonneesAppareil = () => {
  const [donnees, setDonnees] = useState([]);
  const { nomAppareil } = useParams();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchDonneesAppareil = async () => {
      try {
        const response = await fetch(`http://localhost:8000/appareil/donnees?nom=${nomAppareil}`);
        if (response.ok) {
          const data = await response.json();
          setDonnees(data);
          createChart(data);
        } else {
          console.error('Erreur lors de la récupération des données de l\'appareil');
        }
      } catch (error) {
        console.error('Erreur réseau :', error);
      }
    };

    fetchDonneesAppareil();
  }, [nomAppareil]);

  const createChart = (data) => {
    if (!chartRef.current) return;

    const labels = data.map(d => d.date);
    const values = data.map(d => d.valeur);

    new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Valeur',
          data: values,
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
  };

  return (
    <div>
      <h2>Graphique des données de l'appareil {nomAppareil}</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AfficherDonneesAppareil;
