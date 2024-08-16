// This component is responsible for recovering a user's password
// It includes a form to enter the user's email address and a button to submit the form

import React, { useState } from 'react';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import Navbar from '../../components/Navbar';

function RecoverPassword() {
  // State hook to manage the user's email address
  const [email, setEmail] = useState('');

  // Event handler for the form submission
  const handleRecoverPassword = (e) => {
    e.preventDefault();
    // TODO: Add logic to handle password recovery
  };

  return (
    <div>
      {/* Navbar component with the title of the application */}
      <Navbar title="Mobile Wallet Fraud Database" />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white border-2 border-gray-400 rounded-lg">
          {/* Heading for the password recovery form */}
          <h2 className="text-2xl font-bold mb-4">Recover Password</h2>
          {/* Form to input the user's email address */}
          <form onSubmit={handleRecoverPassword}>
            <TextInput
              label="Email address"
              type="email"
              placeholder="e.g malikkolade@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
            />
            <div className="flex justify-center mb-4">
              {/* Button to submit the form */}
              <Button className="bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-md h-10 w-full" type="submit">Send recovery email</Button>
            </div>
            {/* Link to go back to the login page */}
            <p className="pt-2">Back to <a href="/login" className="text-blue-700">Login</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecoverPassword;

