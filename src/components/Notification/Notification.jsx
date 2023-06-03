import PropTypes from 'prop-types';
import React from 'react';

const Notification = props => {
  const { message } = props;
  return <div>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
