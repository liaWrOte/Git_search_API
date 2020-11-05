import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUI } from 'semantic-ui-react';

const Message = ({ message, hideMessage }) => {
  useEffect(() => {
    console.log('Le composant Message apparaît');

    // je veux programmer la disparition du composant dans 10 secondes
    setTimeout(() => {
      // je demande à App de faire disparaître le message
      hideMessage();
    }, 10000);
  }, []);

  return (
    <MessageUI>{message}</MessageUI>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  // pas de paramètre
  hideMessage: PropTypes.func.isRequired,
};

export default Message;
