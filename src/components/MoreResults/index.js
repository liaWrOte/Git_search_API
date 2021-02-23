import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';

const MoreResults = ({ fetchMore}) => (
  <Segment align="center">
    <Button onClick={fetchMore} color="yellow">
      Plus de résultats
    </Button>
  </Segment>
);

MoreResults.propTypes = {
  fetchMore: PropTypes.func.isRequired,
};

export default MoreResults;
