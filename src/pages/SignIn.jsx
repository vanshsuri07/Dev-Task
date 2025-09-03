import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const SignIn = () => {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-2">Sign in to your PopX account</h1>
      <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form>
        <Input label="Email Address" type="email" placeholder="Enter email address" />
        <Input label="Password" type="password" placeholder="Enter password" />
        <Link to="/account-settings">
          <Button type="submit" variant="secondary">Login</Button>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default SignIn;
