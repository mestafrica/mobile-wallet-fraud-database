import React, { useState } from 'react';

import Button from './button';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);


import { AlignJustify } from 'lucide-react';
import FraudReportModal from './reportFraudModal/reportFraudModal'; 

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

  };

  return (
    <div className="flex items-center justify-between p-4">

      <p className="text-blue-700">Mobile Wallet Fraud Database</p>
      <div className="relative">
        <button
          className="flex items-center gap-2 py-2 px-2 border rounded-lg"
          onClick={toggleDropdown}
        >
          <AlignJustify />
          <p>MK</p>
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow">
            <div className="py-2 px-4">
              <p className="text-gray-700">Malik Kolade</p>
              <p className="text-gray-700">malik@example.com</p>
              <button className="w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                My account
              </button>
              <button className="w-full text-left text-red-500 hover:bg-gray-100 py-2">
                Log out
              </button>
            </div>
          </div>
        )}
      </div>

      <p className='text-blue-700'>Mobile Wallet Fraud Database</p>
      <div className='flex gap-4'>
        <Button variant="solid" onClick={handleOpenModal}>Report fraudulent number</Button>
        <div className='flex items-center gap-2 py-2 px-2 border rounded-lg'>
          <AlignJustify />
          <p>MK</p>
        </div>
      </div>

      <FraudReportModal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
};

export default Navbar;
