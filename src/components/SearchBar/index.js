import React from 'react';
import { Input, Form, Segment } from 'semantic-ui-react';

const SearchBar = () => (
  <Segment>
    <Form>
      <Form.Field>
        <Input placeholder="Rechercher..." icon="search" iconPosition="left" />
      </Form.Field>
    </Form>
  </Segment>
);

export default SearchBar;
