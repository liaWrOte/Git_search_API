import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUI } from 'semantic-ui-react';

const Message = ({ message, hideMessage }) => {
  useEffect(() => {
    console.log('Le composant Message apparaît');

    // je veux programmer la disparition du composant dans 10 secondes
    // on peut récupérer l'id du timer pour pouvoir l'annuler
    const timeoutId = setTimeout(() => {
      console.log('Le message va disparaître');
      // je demande à App de faire disparaître le message
      hideMessage();
    }, 10000);

    // quand le message change, je dois annuler le timer avant d'en lancer un nouveau
    // en fait, je veux "nettoyer" le résultat de l'effet précédent
    // https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
    // si on retourne une fonction dans useEffect, c'est une fonction de nettoyage
    // elle sera appelée automatiquement avant l'application du prochain effet
    return () => {
      console.log('on annule le timer');
      clearTimeout(timeoutId);
    };
  }, [message]);

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
