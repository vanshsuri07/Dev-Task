import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/form/Button';

const Welcome = () => {
  return (
    <div className="bg-[#372772] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="space-y-4">
          <Link to="/sign-up">
            <Button>Create Account</Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="secondary">Already Registered? Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
