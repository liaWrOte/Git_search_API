import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ReposResults = () => (
  <Card.Group itemsPerRow={3}>
    <Card>
      <Image src="https://randomfox.ca/images/21.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Nom du repo</Card.Header>
        <Card.Meta>Auteur</Card.Meta>
        <Card.Description>
          Description du repo
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src="https://randomfox.ca/images/21.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Nom du repo</Card.Header>
        <Card.Meta>Auteur</Card.Meta>
        <Card.Description>
          Description du repo
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src="https://randomfox.ca/images/21.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Nom du repo</Card.Header>
        <Card.Meta>Auteur</Card.Meta>
        <Card.Description>
          Description du repo
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default ReposResults;
