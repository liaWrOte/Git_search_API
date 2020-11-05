import React from 'react';
import PropTypes from 'prop-types';
import { Message as MessageUI } from 'semantic-ui-react';

const Message = ({ message }) => (
  <MessageUI>{message}</MessageUI>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
