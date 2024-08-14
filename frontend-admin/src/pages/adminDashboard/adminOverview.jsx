import React from 'react';
import { UserGroupIcon, CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Archive, ArrowUp, Database, ThumbsDown } from 'lucide-react';
import GitPull from '../../assets/git-pull-request.svg';

// Component for displaying the overview content
const OverviewContent = () => (
  <div className="bg-gray-100 min-h-screen p-6">
    {/* Grid for displaying the stat cards */}
    {/* Each stat card displays a number and a title */}
    <div className="grid grid-cols-5 gap-4 mb-6">
      {/* StatCard component is used to display a single stat */}
      <StatCard icon={<Database className="w-7 h-7" />} value={0} title="Reported numbers" />
      <StatCard icon={<Archive className="w-7 h-7" />} value={0} title="Removed reports" />
      <StatCard icon={<ThumbsDown className="w-7 h-7" />} value={0} title="Total votes" />
      <StatCard icon={<UserGroupIcon className="w-7 h-7" />} value={0} title="Total users" />
      <StatCard icon={<img src={GitPull} alt="Git Pull" className="w-7 h-7" />} value={0} title="Total API calls" />
    </div>
    {/* Grid for displaying the API calls card and top API key usage card */}
    <div className="pt-4">
      <div className="grid grid-cols-5 h-[70vh] gap-4">
        {/* ApiCallsCard component displays the API calls card */}
        <div className="col-span-2 flex">
          <ApiCallsCard />
        </div>
        {/* TopApiKeyUsageCard component displays the top API key usage card */}
        <div className="col-span-3 flex">
          <TopApiKeyUsageCard />
        </div>
      </div>
    </div>
  </div>
);

// Component for displaying a single stat card
const StatCard = ({ icon, value, title }) => (
  <div className="bg-white p-3 rounded-lg shadow flex items-center justify-between">
    <div className="flex items-center">
      {/* Icon displayed on the stat card */}
      <div className="bg-gray-100 p-2 rounded-md mr-3">{icon}</div>
      {/* Value and title displayed on the stat card */}
      <div className="flex flex-col">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <div className="flex pb-5">
      {/* Percentage change displayed on the stat card */}
      <span className="bg-green-200 flex px-1 rounded-md font-bold text-green-800 text-sm items-center justify-between">
        <ArrowUp className='w-4 h-4 flex space-between' /> 0%
      </span>
    </div>
  </div>
);

// Component for displaying the API calls card
const ApiCallsCard = () => (
  <div className="bg-white p-4  rounded-lg shadow flex-1">
    <h3 className="text-lg font-semibold mb-4">API calls</h3>

    <div className="flex items-center mb-6 border-b pb-4">
      {/* Checkboxes for filtering the API calls */}
      <label className="flex items-center cursor-pointer mr-6">
        <input type="checkbox" className="form-checkbox text-blue-600 mr-2 h-4 w-4" readOnly />
        <span className="text-sm">Successful calls</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="form-checkbox border-gray-300 mr-2 h-4 w-4" />
        <span className="text-sm">Failed calls</span>
      </label>
    </div>

    <div className="flex items-center mb-2 border-b pb-4">
      {/* Icon displayed on the API calls card */}
      <img src={GitPull} alt="Git Pull" className="w-11 h-11 mr-2 rounded-md bg-gray-100 text-gray-400" />
      {/* Information displayed on the API calls card */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">0</span>
          <span className="text-sm bg-green-200 text-green-800 px-1 font-bold rounded-md flex items-center ml-2">
            <ArrowUp className="w-4 h-4 flex space-between mr-0.5" /> 0%
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Number of API calls</p>
      </div>
      {/* Dropdown for selecting the time filter */}
      <div className="ml-auto">
        <TimeFilter />
      </div>
    </div>

    <p className="text-sm flex justify-center text-gray-500 mt-4 pt-4">You have no API call analysis yet.</p>
  </div>
);

// Component for displaying the time filter dropdown
const TimeFilter = () => (
  <div className="relative inline-block">
    {/* Dropdown for selecting the time filter */}
    <select className="appearance-none bg-gray-100 border border-gray-300 rounded px-3 py-1 pr-2 text-sm">
      <option>Last 7 days</option>
      <option>Last 30 days</option>
      <option>Last 6 months</option>
      <option>Last year</option>
      <option>All time</option>
    </select>
    {/* Down arrow icon displayed next to the dropdown */}
    <ChevronDownIcon className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

// Component for displaying the top API key usage card
const TopApiKeyUsageCard = () => (
  <div className="bg-white p-4 rounded-lg shadow flex-1">
    <div className="flex justify-between">
      {/* Title displayed on the top API key usage card */}
      <h3 className="text-lg font-semibold ">Top 10 API Key usage</h3>
      {/* Dropdown for selecting the time filter */}
      <TimeFilter />
    </div>
    <div className="text-center pt-5">
      {/* Message displayed when there are no API key usage stats */}
      <p className="text-sm text-gray-500 mt-4">You have no API key usage stats yet.</p>
    </div>
  </div>
);

export default OverviewContent;

