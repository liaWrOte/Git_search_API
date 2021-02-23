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

// import logo et scss
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
    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=9`)
      .then((response) => {
        setRepos(response.data.items);
        setMessage(`La recherche a retourné ${response.data.total_count} résultats`);
        // setMessage planifie une mise à jour du state, la nouvelle valeur ne sera
        // accessible qu'au prochain rendu du composant
        setDisplayMessage(true);

        // on enregistre le nombre total de résultats
        setTotal(response.data.total_count);
      })
      .catch((error) => {
        setMessage('Une erreur s\'est produite, ré-essayez dans quelques minutes', error);
        setDisplayMessage(true);
      })
      .finally(() => {
        setLoading(false);
      });

    // exécuté juste après la requête, sans attendre la réponse
    setLoading(true);
  };

  const hideMessage = () => {
    setDisplayMessage(false);
  };

  const fetchMoreResults = () => {
    // ici pour améliorer l'ergonomie on pourrait avoir plutôt un loader sur le bouton,
    setLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${(repos.length / 9) + 1}&per_page=9`)
      .then((response) => {
        setRepos([
          ...repos,
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
      <header className="app__header">
        <img src={logo} alt="" />
      </header>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} className="#test" />
      {displayMessage && <Message message={message} hideMessage={hideMessage} />}
      <ReposResults repos={repos} />
      {loading && (
        <Dimmer active inverted>
          <Loader size="large" />
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
