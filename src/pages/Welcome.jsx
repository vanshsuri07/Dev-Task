import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/form/Button';

const Welcome = () => {
  return (
    <div>
      <h1 className="bg-red-500">Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/sign-up">
        <Button>Create Account</Button>
      </Link>
      <Link to="/sign-in">
        <Button variant="secondary">Already Registered? Login</Button>
      </Link>
    </div>
  );
};

export default Welcome;
