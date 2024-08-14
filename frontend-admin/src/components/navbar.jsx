import React from 'react'
import Button from "../components/button"; // Import the Button component
import { AlignJustify } from 'lucide-react' // Import the AlignJustify icon from Lucide React
import { UserIcon } from '@heroicons/react/24/outline'; // Import the UserIcon icon from Heroicons


const Navbar = () => {
  return (
    // Return a div with some styling for the navbar
    <div className="flex items-center justify-between p-4 ">
      <p className='text-blue-700 font-medium'>
        Mobile Wallet Fraud Database
        {/* Display the title of the web app */}
      </p>
      <div className='flex gap-4'>
        <Button variant="solid">Report fraudulent number </Button>
        {/* Render a button with a solid variant for reporting fraudulent numbers */}
        <div className='bg-gray-100 flex items-center gap-2 py-2 px-2 border rounded-lg'>
          <AlignJustify/>
          {/* Render the AlignJustify icon */}
          <UserIcon className='w-5 h-5'/>
          {/* Render the UserIcon icon */}
        </div>
      </div>      
    </div>
  )
}

export default Navbar
