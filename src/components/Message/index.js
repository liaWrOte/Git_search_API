import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUI } from 'semantic-ui-react';

const Message = ({ message, hideMessage }) => {
  useEffect(() => {
    console.log('Le composant Message apparaît');

    // je veux programmer la disparition du composant dans 10 secondes
    const timeoutId = setTimeout(() => {
      // je demande à App de faire disparaître le message
      hideMessage();
    }, 10000);

    // quand le message change, je dois annuler le timer avant d'en lancer un nouveau
    // en fait, je veux "nettoyer" le résultat de l'effet précédent
    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  return (
    <MessageUI color="yellow">{message}</MessageUI>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  hideMessage: PropTypes.func.isRequired,
};

export default Message;
