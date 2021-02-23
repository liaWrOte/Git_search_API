import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';

// impmort css
import './index.scss';

const SearchBar = ({ manageSubmit, search, setSearch }) => {
  const refInput = useRef(null);

  // objectif : placer le focus sur l'input dès qu'on affiche la page (plus
  useEffect(() => {
    refInput.current.focus();
  }, []);

  // si je saisis entrée dans un input, ça provoque la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <Segment className="searchbar" color="yellow">
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
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
