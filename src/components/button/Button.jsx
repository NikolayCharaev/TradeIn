import React from 'react';

const Button = (props) => {
  return (
    <button style={{ textTransform: props.text,backgroundColor: props.bgColor, border: props.borderColor, color: props.color}} className="button">
      {props.name}
    </button>
  );
};

export default Button;
