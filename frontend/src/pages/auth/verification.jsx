// src/pages/auth/verification.jsx

// Import React and necessary hooks and components
import React, { useState } from 'react';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import Navbar from '../../components/Navbar';

// Define the Verification component
function Verification() {
  // Initialize state for OTP input
  const [otp, setOtp] = useState('');

  // Define handler function for form submission
  const handleVerification = (e) => {
    e.preventDefault();
    // Placeholder for OTP verification logic
    // Can be implemented here
  };

  return (
    // Render the Verification page
    <div>
      {/* Render the Navbar component with title */}
      <Navbar title="Mobile Wallet Fraud Database" />
      {/* Render the verification form */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white border-2 border-gray-400 rounded-lg">
          {/* Render the verification heading */}
          <h2 className="text-2xl font-bold mb-4">Verification</h2>
          {/* Render the OTP instruction */}
          <p className="mb-4">
            We have sent an OTP to{' '}
            <span className="font-semibold">malikkolade@gmail.com</span>.
          </p>
          {/* Render the verification form */}
          <form onSubmit={handleVerification}>
            {/* Render the OTP input field */}
            <TextInput
              label="OTP"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
            />
            {/* Render the verify button */}
            <div className="flex justify-center mb-4">
              <Button
                className="bg-blue-700  hover:bg-blue-800 text-white text-sm rounded-md h-10 w-full"
                type="submit"
              >
                Verify
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Export the Verification component
export default Verification;

