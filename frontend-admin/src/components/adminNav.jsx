import React, { useState } from 'react'
import { DatabaseIcon, HomeIcon, ClipboardListIcon, ChevronDown, CalendarIcon } from 'lucide-react';
import { UserGroupIcon } from '@heroicons/react/24/outline';

// Importing the content components for the different tabs
import UsersContent from '../pages/adminDashboard/usersContent';
import ReportedNumbersContent from '../pages/adminDashboard/reportedNumbers';
import RequestsContent from '../pages/adminDashboard/requestContents';
import OverviewContent from '../pages/adminDashboard/adminOverview';

// Importing the navbar component
import Navbar from '../components/navbar';

// Component for rendering the navigation bar for the admin dashboard
const AdminNav = () => {
  // State variables to keep track of the active tab and time filter
  const [activeTab, setActiveTab] = useState('Overview');
  const [timeFilter, setTimeFilter] = useState('All time');

  // Function to handle tab click and update the active tab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Rendering the navbar component */}
      <Navbar />

      <div className="px-4">
        {/* Rendering the navigation bar */}
        <div className="flex justify-between items-center p-1">
          <div className="flex space-x-6">
            {/* Rendering the nav items */}
            <NavItem
              icon={<HomeIcon size={18} />}
              text="Overview"
              active={activeTab === 'Overview'}
              onClick={() => handleTabClick('Overview')}
            />
            <NavItem
              icon={<DatabaseIcon size={18} />}
              text="Reported numbers"
              active={activeTab === 'Reported numbers'}
              onClick={() => handleTabClick('Reported numbers')}
            />
            <NavItem
              icon={<UserGroupIcon className='w-[28px] h-[20px]' />}
              text="Users"
              active={activeTab === 'Users'}
              onClick={() => handleTabClick('Users')}
            />
            <NavItem
              icon={<ClipboardListIcon size={18} />}
              text="Requests"
              active={activeTab === 'Requests'}
              onClick={() => handleTabClick('Requests')}
            />
          </div>
          <div className="flex items-center space-x-4">
            {/* Rendering the notification badge */}
            <span className="bg-red-100 px-2 py-2 rounded text-red-500 text-sm">
              New fraudulent number request - <a href="#" className="text-red-500 hover:underline font-bold">View</a>
            </span>
            <div className="relative ">
              {/* Rendering the time filter dropdown */}
              <div className="pointer-events-none absolute  inset-y-0 left-0 flex items-center px-2 text-gray-700 ">
                <CalendarIcon className="w-4 h-4 text-gray-500 mr-2" />
              </div>
              <select
                className="bg-white appearance-none border-gray-600 rounded pl-8 py-2 text-sm"
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
              >
                <option>All time</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rendering the content based on the active tab */}
      <div>
        {activeTab === 'Overview' && <OverviewContent />}
        {activeTab === 'Reported numbers' && <ReportedNumbersContent />}
        {activeTab === 'Users' && <UsersContent />}
        {activeTab === 'Requests' && <RequestsContent />}
      </div>
    </div>
  )
}

// Component for rendering a single nav item
const NavItem = ({ icon, text, active, onClick }) => (
  <div
    className={`flex items-center space-x-1 cursor-pointer relative ${active ? 'text-blue-600' : 'text-gray-600'}`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm">{text}</span>
    {active && <div className="absolute bottom-[-9px] left-0 w-full h-0.5 bg-blue-600"></div>}
  </div>
);

export default AdminNav;

