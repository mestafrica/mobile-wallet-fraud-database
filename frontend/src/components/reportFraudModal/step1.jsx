import React, { useState } from 'react';
import { X, Eye, EyeOff } from "lucide-react";

const Step1UserInfo = ({ formData, updateFormData, nextStep, prevStep, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="">
     

      <div className="p-6">
        <div className="flex items-center mb-4 pb-2">
          <div className="flex items-center w-1/2">
            <div className="w-9 h-9 border border-blue-600 text-blue-600 rounded-full flex items-center justify-center mr-2 text-lg">1</div>
            <span className="ml-2 text-blue-700 text-lg">Your info</span>
          </div>
          <div className="flex items-center w-1/2 pl-5">
            <div className="w-9 h-9 border border-gray-500 text-gray-600 rounded-full flex items-center justify-center mr-2 text-lg">2</div>
            <span className="text-gray-600 ml-2 text-lg">Fraud report</span>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 mb-4">Your details are required to submit a fraud report.</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 text-gray-700">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
              placeholder="e.g Malik"
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 text-gray-700">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
              placeholder="e.g Kolade"
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-50"
            />
          </div>
        </div>


        <div className="mb-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="e.g malikkolade@gmail.com"
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="mb-1 text-gray-700">Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber || ''}
              onChange={handleChange}
              placeholder="e.g 02345xxxxxx"
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="createAccount"
            name="createAccount"
            checked={formData.createAccount || false}
            onChange={(e) => updateFormData({ createAccount: e.target.checked })}
            className="mr-2 w-5 h-5"
          />
          <label htmlFor="createAccount" className="text-lg text-gray-700">Create an account for me</label>
        </div>

        {formData.createAccount && (
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-base  text-gray-700 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              placeholder="Password"
              className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3/4 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-between p-4 border-t">
  <button
    onClick={prevStep}
    className="text-gray-600 border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-200"
  >
    Previous
  </button>
  <button
    onClick={nextStep}
    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
  >
    Next
  </button>
</div>

    </div>
  );
};

export default Step1UserInfo;