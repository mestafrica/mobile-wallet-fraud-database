import React, { useState } from 'react';
import Button from "./button";
import { AlignJustify } from 'lucide-react';
import FraudReportModal from './reportFraudModal/reportFraudModal'; 
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

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
      <a href="/">
      <p className='text-blue-700'>Mobile Wallet Fraud Database</p></a>
      <div className='flex gap-4'>
        <Button variant="solid" onClick={handleOpenModal}>Report fraudulent number</Button>
        {/* <Button variant="solid">Register</Button>
        <Button variant="solid">Login</Button> */}
        <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex text-sm">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>

                  <div className='flex items-center gap-2 py-2 px-2 border rounded-lg'>
                    <AlignJustify />
                    <p>MK</p>
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="/account" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                {/* <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem> */}
                <MenuItem>
                  <a href="/login" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
          </Menu>
      </div>

      <FraudReportModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
