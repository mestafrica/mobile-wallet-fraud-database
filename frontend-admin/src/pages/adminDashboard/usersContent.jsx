import React, { useState } from 'react';
import { Calendar, CalendarArrowUpIcon, CalendarIcon, ChevronDown, ExternalLink, Square, Trash2 } from 'lucide-react';
import SearchInput from "../../../../frontend/src/components/searchInput"
import { UserMinusIcon } from '@heroicons/react/24/outline';


const UsersContent = () => {
  const data = [
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
    { name: "Odoh Craig", phone: "09059784163", email: "malik@gmail.com", date: "April 15 2023", API: "2", report: "3", activity: "2 hours ago" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className="pb-8 bg-[#F9FAFB] h-screen">

      <div className='flex justify-center items-center pt-6 space-x-52 '>

        <div className='font-semibold text-xl'>100 Reported Cases</div>

        <div className='font-medium '>
          <input type="checkbox" name="checkbox" id="checkbox" className='w-8  border' /> Show reported reports
        </div>

        <div className='flex gap-2 '>
          <SearchInput  />

          <select className='border border-gray-400 w-24 h-10 rounded-md shadow-sm' name="category" id="category">
            <option>All Status</option>
            <option>Pending</option>
            <option>Public</option>
          </select>

          <div className='relative w-[110px]'>
            <select className='appearance-none border flex justify-center items-center w-full h-10 border-gray-400 rounded-md shadow-sm pl-7 ' name="time" id="time">
              <option>All time</option>
              <option>Today</option>
              <option>Last 7 days</option>
              <option>Last Month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 bottom-4 flex items-center pt-4">
              <CalendarIcon className='w-6 h-4 text-black' />
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center pt-4 text-gray-700">
              <ChevronDown className='w-5 text-black ' />
            </div>
          </div>


        </div>

      </div>

      <div className="mx-auto pl-11 p-4">
        <table className="w-[98%] bg-white border-l border-r border border-gray-300 rounded-lg overflow-hidden">
          <thead className='h-12'>
            <tr>
              <th className="py-2 px-6 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300"> <input type="checkbox" name="checkbox" id="checkbox" className='w-8  border' /> NAME</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">PHONE NUMBER</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">Email Address</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">DATE REPORTED</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">API KEYS</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">REPORTED NUMBERS</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">ACCOUNT ACTIVITY</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-6 border-b border-gray-300 "> <input type="checkbox" name="checkbox" id="checkbox" className='w-8  border' /> {item.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.phone}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.email}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.date}</td>
                <td className=" border-b pr-3 text-center border-gray-300"> {item.API}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">{item.report}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-left">
                  <span className="inline-block">{item.activity}</span>
                  <ExternalLink className='text-blue-600 w-5 inline-block ml-2' />
                  <UserMinusIcon className='text-red-700 w-5 inline-block ml-2' />
                </td>

              </tr>
            ))}
            <tr>
              <td colSpan="7" className="py-2 px-4 pt-4 text-center flex justify-center items-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 mx-1 bg-gray-200 rounded-md"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 mx-1 bg-gray-200 rounded-md"
                >
                  &gt;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
};

export default UsersContent