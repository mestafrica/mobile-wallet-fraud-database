import React, { useState } from 'react';
import { Calendar, CalendarArrowUpIcon, CalendarIcon, ChevronDown, ExternalLink, Square, Trash2 } from 'lucide-react';
import SearchInput from "../../../../frontend/src/components/searchInput"



const ReportedNumbersContent = () => {
  const data = [
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Public", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Public", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Public", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Public", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
    { name: "Odoh Craig", phone: "09059784163", network: "MTN", date: "April 15 2023", status: "Pending", comment: "Duped Someone of GHS12000, Sent......." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className=" bg-[#F9FAFB] h-[100vh] ">
      <div className='flex justify-center items-center pt-6 space-x-48 '>

        <div className='font-semibold text-xl'>100 Reported Cases</div>

        <div className='font-medium '>
          <input type="checkbox" name="checkbox" id="checkbox" className='w-8  border'/> Show reported reports
        </div>

        <div className='flex gap-2 '>
          <SearchInput  />

          <select className='border border-gray-400 w-24 h-10 rounded-md shadow-sm' name="category" id="category">
            <option>All Status</option>
            <option>Pending</option>
            <option>Public</option>
          </select>

          <div className='relative w-[125px]'>
      <select className='appearance-none border flex justify-center items-center w-full h-10 border-gray-400 rounded-md shadow-sm pl-10 pr-4' name="time" id="time">
        <option>All time</option>
        <option>Today</option>
        <option>Last 7 days</option>
        <option>Last Month</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 left-0 bottom-4 flex items-center px-2">
        <CalendarIcon className='w-6 h-4 text-black' />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 bottom-4 flex items-center px-2 text-gray-700">
                <ChevronDown className='w-5 text-black ' />
              </div>
    </div>

         
        </div>
      </div>

      <div className=" mx-auto pl-14 p-4">
        <table className="w-[98%] bg-white border-l-1 border-r-1 border border-gray-300 rounded-lg overflow-hidden">
          <thead className='h-12 flex-1 gap-6 '>
            <tr>
              <th className="py-2 px-6  bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300"><input type="checkbox" name="checkbox" id="checkbox" className='w-8  border'/>   NAME</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">PHONE NUMBER</th>
              <th className="py-2 px-4 bg-gray-200 text-left  text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">NETWORK</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">DATE REPORTED</th>
              <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">STATUS</th>
              <th className="py-2 px-4 pl-20 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">COMMENT</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className=''>
                <td className="py-2 px-6 border-b border-gray-300"><input type="checkbox" name="checkbox" id="checkbox" className='w-8  border'/>    {item.name}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.phone}</td>
                <td className="py-2 px-4 border-b  pl-7 border-gray-300">{item.network}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.date}</td>
                <td className="py-0 px-0 border-b pl-3 border-gray-300">
                  <span className={`inline-block px-2 py-1 text-xs font-medium w-16 text-center rounded-lg ${item.status === 'Pending' ? 'text-black bg-[#FDF7B2]' : 'text-green-800 bg-green-100'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 pl-20 text-left">
  <span className="inline-block">{item.comment}</span>
  <ExternalLink className='text-blue-600 w-5 inline-block ml-4' />
  <Trash2 className='text-red-700 w-5 inline-block ml-4' />
</td>

              </tr>
            ))}
            <tr>
              <td colSpan="6" className="py-2  px-4 pt-4 text-center flex justify-center items-center ">
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

export default ReportedNumbersContent