import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Repo from './Repo';

const ReposResults = ({ repos }) => (
  <Card.Group itemsPerRow={3}>
    {repos.map((item) => (
      <Repo key={item.id} {...item} />
    ))}
  </Card.Group>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
