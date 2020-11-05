// == Import npm
import React from 'react';

import 'semantic-ui-css/semantic.min.css';

// == Import
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';

// import des données
import reposData from 'src/data/repos';

// si j'utilise une image qui est dans src, je l'importe pour que webpack puisse
// gérer l'image et avoir un chemin dist/......
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <img src={logo} alt="" />
    </header>
    <SearchBar />
    <Message />
    <ReposResults repos={reposData.items} />
  </div>
);

// == Export
export default App;
