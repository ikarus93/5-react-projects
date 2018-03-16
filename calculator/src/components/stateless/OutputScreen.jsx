import React from 'react';
import PropTypes from 'prop-types';

const Output = props => {
  return <p className="output">{props.val}</p>;
};

Output.PropTypes = {
    val: PropTypes.string
}

export default Output;