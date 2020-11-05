import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = ({ manageSubmit, search, setSearch }) => {
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
