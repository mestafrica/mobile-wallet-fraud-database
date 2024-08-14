import React, { useState, useRef } from 'react';
import { X } from "lucide-react";

const Step2FraudReport = ({ 
  formData, updateFormData, prevStep, onSubmit, isAlreadyReported }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [network, setNetwork] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fraudDescription, setFraudDescription] = useState('');
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const evidenceInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const onClose = () => {
    setIsSubmitted(false);
    setPhoneNumber('');
    setNetwork('');
    setFirstName('');
    setLastName('');
    setFraudDescription('');
    setEvidenceFile(null);
    setImageFile(null);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'image') {
        setImageFile(file);
        updateFormData({ fraudImage: file });
      } else if (type === 'evidence') {
        setEvidenceFile(file);
        updateFormData({ fraudEvidence: file });
      }
    }
  };

  const triggerFileInput = (inputRef) => {
    inputRef.current.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg md:w-1/2 overflow-y-auto max-h-screen">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='flex items-center justify-between pb-2 border-b'>
            <h2 className="text-2xl font-bold">Report fraudulent number</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center mb-4 pb-2">
            <div className="flex items-center w-1/2">
              <div className="w-9 h-9 border border-gray-600 text-gray-600 rounded-full flex items-center justify-center mr-2 text-lg">1</div>
              <span className="ml-2 text-gray-600 text-lg">Your info</span>
            </div>
            <div className="flex items-center w-1/2 pl-5">
              <div className="w-9 h-9 border border-blue-600 text-blue-600 rounded-full flex items-center justify-center mr-2 text-lg">2</div>
              <span className="text-blue-700 ml-2 text-lg">Fraud report</span>
            </div>
          </div>
          {isAlreadyReported && (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
              <p className="font-bold">Just so you know!</p>
              <p>This phone number has been submitted by someone else and is currently under review.</p>
            </div>
          )}

          <p className="text-lg text-gray-600 mb-4">Details of the person and about the fraud.</p>
          
          <div className="mb-4">
            <div className="flex flex-col">
              <label htmlFor="fraudPhoneNumber" className="mb-1 text-gray-700">Phone number</label>
              <input
                type="tel"
                name="fraudPhoneNumber"
                value={formData.fraudPhoneNumber || ''}
                onChange={handleChange}
                placeholder="e.g 02345xxxxxx"
                className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label htmlFor="mobileMoneyProvider" className="mb-1 text-gray-700">Mobile money provider</label>
              <select
                name="mobileMoneyProvider"
                value={formData.mobileMoneyProvider || ''}
                onChange={handleChange}
                className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
              >
                <option value="MTN">MTN</option>
                <option value="Vodafone">Telecel</option>
                <option value="AirtelTigo">AirtelTigo</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="fraudFirstName" className="mb-1 text-gray-700">First name</label>
              <input
                type="text"
                name="fraudFirstName"
                value={formData.fraudFirstName || ''}
                onChange={handleChange}
                placeholder="e.g James"
                className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fraudLastName" className="mb-1 text-gray-700">Last name</label>
              <input
                type="text"
                name="fraudLastName"
                value={formData.fraudLastName || ''}
                onChange={handleChange}
                placeholder="e.g Bond"
                className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Image of fraud person (Optional)</label>
            <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 w-full">
              <input
                type="file"
                ref={imageInputRef}
                onChange={(e) => handleFileChange(e, 'image')}
                className="hidden"
                accept="image/*"
              />
              <button
                type="button"
                onClick={() => triggerFileInput(imageInputRef)}
                className="bg-gray-800 text-white px-4 rounded-sm py-2 text-sm h-full"
              >
                Choose file
              </button>
              <span className="text-gray-700 ml-2 text-sm flex-grow">
                {imageFile ? imageFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label htmlFor="fraudDescription" className="mb-1 text-gray-700">Description of fraud</label>
              <textarea
                name="fraudDescription"
                value={formData.fraudDescription || ''}
                onChange={handleChange}
                placeholder="Describe the fraud..."
                className="border p-2 rounded-md bg-gray-100 border-gray-300 w-full h-24"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Evidence of fraud</label>
            <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 w-full">
              <input
                type="file"
                ref={evidenceInputRef}
                onChange={(e) => handleFileChange(e, 'evidence')}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => triggerFileInput(evidenceInputRef)}
                className="bg-gray-800 text-white px-4 rounded-sm py-2 text-sm h-full"
              >
                Choose file
              </button>
              <span className="text-gray-700 ml-2 text-sm flex-grow">
                {evidenceFile ? evidenceFile.name : 'No file chosen'}
              </span>
            </div>
          </div>

          <p className='text-xs text-gray-500 pb-4'>File types: all file types</p>
          <div className="flex justify-between p-4 border-t">
            <button
              onClick={prevStep}
              className="text-gray-600 border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-200"
            >
              Previous
            </button>
            <button
              onClick={onSubmit}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit fraud report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2FraudReport;