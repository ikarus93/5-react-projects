import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.jsx';

const Row = props => {
  return (
    <div className="row">
      {props.fields.map(field => {
        return (
          <Button key={field.text}
            className={field.className}
            handler={() => {
              field.handler(field.text);
            }}
            text={field.text}
          />
        );
      })}
    </div>
  );
};

Row.PropTypes = {
    fields: PropTypes.arrayOf(PropTypes.object)
}

export default Row;
