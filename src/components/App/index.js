// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

// == Import
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import MoreResults from 'src/components/MoreResults';

// si j'utilise une image qui est dans src, je l'importe pour que webpack puisse
// gérer l'image et avoir un chemin dist/......
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';

/*
Objectif : le message disparaît automatiquement 10 secondes après son apparition
- programmer la disparition du message au moment où il apparaît, 10 secondes
après (setTimeout)
- booléen displayMessage dans le state
*/

// == Composant
const App = () => {
  // valeur de l'input pour la recherche
  const [search, setSearch] = useState('');

  // repositories à afficher
  const [repos, setRepos] = useState([]);

  // message à afficher
  const [message, setMessage] = useState('');

  // indique si on est en cours de chargement (loader affiché)
  const [loading, setLoading] = useState(false);

  // indique si on affiche le composant Message
  const [displayMessage, setDisplayMessage] = useState(false);

  // nombre total de résultats
  const [total, setTotal] = useState(0);

  const makeSearch = () => {
    console.log('c\'est le moment de faire la recherche pour : ', search);

    // on envoie une requête vers https://api.github.com/search/repositories?q=TEXTE
    // (ajout de paramètres pour gérer la pagination des résultats)
    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`)
      .then((response) => {
        // console.log(response.data);
        setRepos(response.data.items);
        setMessage(`La recherche a retourné ${response.data.total_count} résultats`);
        // setMessage planifie une mise à jour du state, la nouvelle valeur ne sera
        // accessible qu'au prochain rendu du composant
        // console.log(message); // affiche l'ancienne valeur de message
        setDisplayMessage(true);

        // on enregistre le nombre total de résultats
        setTotal(response.data.total_count);
      })
      .catch((error) => {
        setMessage('Une erreur s\'est produite, ré-essayez dans quelques minutes');
        setDisplayMessage(true);
      })
      .finally(() => {
        setLoading(false);
      });

    // exécuté juste après la requête, sans attendre la réponse
    setLoading(true);
  };

  // console.log(message); // j'ai bien accès à la nouvelle valeur ici

  const hideMessage = () => {
    setDisplayMessage(false);
  };

  const fetchMoreResults = () => {
    // affichage du loader pendant le chargement des résultats supplémentaires =>
    // ici pour améliorer l'ergonomie on pourrait avoir plutôt un loader sur le bouton,
    // mais plus difficile à gérer, il faudrait encore ajouter une nouvelle
    // information au state
    // Note : on a ajouté une prop "page" au composant Dimmer pour que le layer gris
    // recouvre bien toute la page
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${(repos.length / 9) + 1}&per_page=9`)
      .then((response) => {
        setRepos([
          ...repos,
          // utilisation de spread operator pour "aplatir" le tableau (récupérer les
          // éléments), sinon on intègrerait un tableau dans le tableau
          ...response.data.items,
        ]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      {displayMessage && <Message message={message} hideMessage={hideMessage} />}
      <ReposResults repos={repos} />
      {loading && (
        <Dimmer active page>
          <Loader />
        </Dimmer>
      )}
      {repos.length !== total && (
        <MoreResults
          fetchMore={fetchMoreResults}
        />
      )}
    </div>
  );
};

// == Export
export default App;
