// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

// == Import
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// si j'utilise une image qui est dans src, je l'importe pour que webpack puisse
// gérer l'image et avoir un chemin dist/......
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';

// == Composant
const App = () => {
  // valeur de l'input pour la recherche
  const [search, setSearch] = useState('');

  // repositories à afficher
  const [repos, setRepos] = useState([]);

  // message à afficher
  const [message, setMessage] = useState('Bienvenue !');

  // indique si on est en cours de chargement (loader affiché)
  const [loading, setLoading] = useState(false);

  const makeSearch = () => {
    console.log('c\'est le moment de faire la recherche pour : ', search);

    // on fait appel à l'API
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        // console.log(response.data);
        setRepos(response.data.items);
        setMessage(`La recherche a retourné ${response.data.total_count} résultats`);
        // setMessage planifie une mise à jour du state, la nouvelle valeur ne sera
        // accessible qu'au prochain rendu du composant
        // console.log(message); // affiche l'ancienne valeur de message
      })
      .catch((error) => {
        setMessage('Une erreur s\'est produite, ré-essayez dans quelques minutes');
      })
      .finally(() => {
        setLoading(false);
      });

    // exécuté juste après la requête, sans attendre la réponse
    setLoading(true);
  };

  // console.log(message); // j'ai bien accès à la nouvelle valeur ici

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      <Message message={message} />
      <ReposResults repos={repos} />
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
