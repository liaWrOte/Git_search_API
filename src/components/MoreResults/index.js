import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';

const MoreResults = ({ fetchMore, darkMode }) => (
  <Segment align="center" inverted={darkMode}>
    <Button onClick={fetchMore}>
      Plus de résultats
    </Button>
  </Segment>
);

MoreResults.propTypes = {
  fetchMore: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default MoreResults;
