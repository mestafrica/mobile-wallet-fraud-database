

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PasswordInput from '../../../components/passwordInput';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const { register, handleSubmit, formState: { errors,} } = useForm();
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = data => {
    if (rememberMe) {
      // Handle remember me logic, like setting local storage
      localStorage.setItem('rememberMe', JSON.stringify(data));
    } else {
      localStorage.removeItem('rememberMe');
    }
    // handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col bg-white w-3/4 md:w-1/3 lg:w-1/4 p-8 rounded-lg shadow-md">
        <h4 className="font-bold text-xl text-center mb-4">Login in with your account</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="e.g. danjordan@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Enter a valid email address!" })}
            />
            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="password">Password</label>
            <PasswordInput />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-blue-600">Forgot password?</Link>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 text-white">
            { "Login"}
          </button>
          <div>
            <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
