import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = ({ manageSubmit }) => {
  // si je saisis entrée dans un input, ça provoque la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input placeholder="Rechercher..." icon="search" iconPosition="left" />
        </Form.Field>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  manageSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
