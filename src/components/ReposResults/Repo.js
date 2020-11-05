import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

/*
Pour mettre du style inline
<Composant style={objet} />
On fournit un objet en Javascript qui décrit les attributs CSS à appliquer,
<Composant style={{ display: 'block' }} />
Si tiret dans la propriété CSS je l'écris en camelCase,
overflow-wrap => overflowWrap
*/

const Repo = ({ name, owner, description }) => (
  <Card>
    <Image src={owner.avatar_url} wrapped ui={false} />
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

// si une prop n'est pas obligatoire, il faut indiquer quelle est sa valeur par défaut
// cette valeur sera utilisée si aucune valeur n'est fournie pour la prop
Repo.defaultProps = {
  description: '',
};

export default Repo;
