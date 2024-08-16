import { Copy, Edit, Plus, Trash2 } from "lucide-react";
import K from "../constant/constant";
import Button from "./button";
import { useState } from "react";

import ApiKey from "../pages/apikey";

const ApiCard = () => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
    };

    const getStatusClasses = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-green-200 border-green-400';
            case 'Inactive':
                return 'bg-gray-200 border-gray-400';
            default:
                return '';
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">4 API Keys</h3>
                    <Button onClick={toggleModal}>
                        <Plus className="w-4 h-4 mr-2" /> Create new API Key
                    </Button>
                </div>
                
            
                {modal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg w-1/2">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-lg font-semibold">Create New API Key</h4>
                                <Button onClick={toggleModal} className="text-red-500">
                                    Close
                                </Button>
                            </div>
                            <ApiKey />
                        </div>
                    </div>
                )}
                
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
                    <thead>
                        <tr className="bg-[#ECEFF7]">
                            <th className="py-2 px-4 border-b border-gray-200">API Keys</th>
                            <th className="py-2 px-4 border-b border-gray-200">API Key Name</th>
                            <th className="py-2 px-4 border-b border-gray-200">Date Created</th>
                            <th className="py-2 px-4 border-b border-gray-200">Status</th>
                            <th className="py-2 px-4 border-b border-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {K.APIKEYS.map((apikey, index) => (
                            <tr key={index} className="text-center ">
                                <td className="py-6 px-4 border-b border-gray-200">{apikey.key}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{apikey.name}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{apikey.dateCreated}</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <span className={`px-2 py-1 rounded ${getStatusClasses(apikey.status)}`}>
                                        {apikey.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <div className="flex justify-center gap-4">
                                        <Copy className="text-green-300 w-4 h-4 cursor-pointer" />
                                        <Edit className="text-blue-400 w-4 h-4 cursor-pointer" />
                                        <Trash2 className="text-red-400 w-4 h-4 cursor-pointer" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApiCard;
