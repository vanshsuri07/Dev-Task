import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#372772] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
