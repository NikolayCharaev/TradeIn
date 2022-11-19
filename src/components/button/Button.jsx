import React from 'react';

const Button = (props) => {
  return (
    <button style={{ textTransform: props.text }} className="button">
      {props.name}
    </button>
  );
};

export default Button;
