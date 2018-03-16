import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button className={props.className} onClick={props.handler}>
      {props.text}
    </button>
  );
};

Button.PropTypes = {
    className: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;