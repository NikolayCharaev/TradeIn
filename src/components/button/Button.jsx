import React from 'react';

const Button = (props) => {
  return (
    <button
      style={{
        textTransform: props.text,
        backgroundColor: props.bgColor,
        border: props.borderColor,
        color: props.color,
      }}
      className="button">
      {props.name}
    </button>
  );
};

const ButtonWhite = (props) => {
  return (
    <button
      style={{
        textTransform: props.text,
        backgroundColor: props.bgColor,
        border: props.borderColor,
        color: props.color,
      }}
      className="button-white">
      {props.name}
    </button>
  );
};

export  { Button, ButtonWhite };
// export default Button
