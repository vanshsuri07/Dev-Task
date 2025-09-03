import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const SignUp = () => {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-2">Create your PopX account</h1>
      <form>
        <Input label="Full Name*" placeholder="Marry Doe" />
        <Input label="Phone number*" placeholder="Marry Doe" />
        <Input label="Email address*" type="email" placeholder="Marry Doe" />
        <Input label="Password*" type="password" placeholder="Marry Doe" />
        <Input label="Company name" placeholder="Marry Doe" />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Are you an Agency?*</label>
          <div className="flex items-center">
            <input type="radio" id="yes" name="agency" value="yes" className="mr-2" />
            <label htmlFor="yes" className="mr-4">Yes</label>
            <input type="radio" id="no" name="agency" value="no" className="mr-2" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <Link to="/account-settings">
          <Button type="submit">Create Account</Button>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
