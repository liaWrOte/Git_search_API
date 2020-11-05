import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = ({ manageSubmit, search, setSearch }) => {
  // https://fr.reactjs.org/docs/hooks-reference.html#useref
  // je déclare une variable qui contiendra une référence vers un élément du DOM.
  // Cette référence ne sera valide qu'après le premier rendu du composant, donc
  // valeur initiale = null
  // il faut aussi que j'utilise la prop spéciale ref sur le composant que je
  // veux référencer (dans le JSX)
  // Après le premier chargement j'aurai accès au noeud du DOM : maVariable.current
  const refInput = useRef(null);

  // objectif : placer le focus sur l'input dès qu'on affiche la page (plus
  // précisément : juste après le premier rendu de SearchBar)
  useEffect(() => {
    // console.log('c\'est le moment de placer le focus sur l\'input');

    // console.log(refInput);

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus
    refInput.current.focus();
  }, []);

  // si je saisis entrée dans un input, ça provoque la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            ref={refInput}
            placeholder="Rechercher..."
            icon="search"
            iconPosition="left"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  // paramètre : nouvelle valeur
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
