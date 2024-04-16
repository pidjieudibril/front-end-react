import React from 'react';
import AfficherDonneesAppareil from '../components/ListeAppareils';

const AfficherDonneesAppareilPage = () => {
  return (
    <div id="/afficher-donnees-appareil/:nomAppareil">
      <h2>liste appareil</h2>
      <AfficherDonneesAppareil />
    </div>
  );
};

export default AfficherDonneesAppareilPage;
