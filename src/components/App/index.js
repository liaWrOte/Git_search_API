// == Import npm
import React, { useState } from 'react';
import axios from 'axios';

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

  const makeSearch = () => {
    console.log('c\'est le moment de faire la recherche pour : ', search);

    // on fait appel à l'API
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        // console.log(response.data);
        setRepos(response.data.items);
        setMessage(`La recherche a retourné ${response.data.total_count} résultats`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <SearchBar manageSubmit={makeSearch} search={search} setSearch={setSearch} />
      <Message message={message} />
      <ReposResults repos={repos} />
    </div>
  );
};

// == Export
export default App;
