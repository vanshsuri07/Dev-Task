import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseClasses = 'w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';

  const variantClasses = {
    primary: 'bg-purple-500 hover:bg-purple-700 text-white',
    secondary: 'bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white border border-purple-500 hover:border-transparent',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
