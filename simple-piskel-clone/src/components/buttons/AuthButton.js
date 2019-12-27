import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ text }) => <button type="button">{text}</button>;

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AuthButton;
