import React from 'react';

const Button = ({ onClick, type, disabled, label }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;