import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const Repo = ({
  name, owner, description, html_url,
}) => (
  <Card color="yellow" href={html_url} target="_blank">
    <Image src={owner.avatar_url} wrapped ui />
    <Card.Content>
      <Card.Header style={{ overflowWrap: 'break-word' }}>{name}</Card.Header>
      <Card.Meta>{owner.login}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
};

Repo.defaultProps = {
  description: '',
};

export default Repo;
