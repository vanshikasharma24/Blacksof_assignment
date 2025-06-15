import React from 'react';

const Button = ({ children, className = '', onClick }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer transition-all duration-300 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
